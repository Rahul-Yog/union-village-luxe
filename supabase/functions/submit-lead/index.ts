import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Zod validation schema for lead submissions
const LeadSubmissionSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(100, "First name too long"),
  last_name: z.string().trim().min(1, "Last name is required").max(100, "Last name too long"),
  email: z.string().trim().email("Invalid email format").max(255, "Email too long"),
  phone: z.string().trim().max(20, "Phone number too long").optional().or(z.literal('')),
  interested_in: z.string().max(100, "Interest field too long").nullable().optional(),
  price_range: z.string().max(50, "Price range too long").nullable().optional(),
  is_realtor: z.boolean(),
  contact_consent: z.boolean(),
  form_type: z.string().max(50, "Form type too long"),
  user_agent: z.string().max(500, "User agent too long")
});

interface LeadSubmissionRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  interested_in?: string;
  price_range?: string;
  is_realtor: boolean;
  contact_consent: boolean;
  form_type: string;
  user_agent: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting: Check IP-based submission frequency
    // Extract first IP from x-forwarded-for (can contain multiple IPs separated by commas)
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor 
      ? forwardedFor.split(',')[0].trim() 
      : req.headers.get('x-real-ip') || 'unknown';
    
    // Create Supabase client with service role key (bypasses RLS)
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Check for recent submissions from same IP (last 5 minutes)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from('leads')
      .select('id, created_at')
      .eq('ip_address', clientIp)
      .gte('created_at', fiveMinutesAgo);

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    }

    // Allow max 3 submissions per IP per 5 minutes
    if (recentSubmissions && recentSubmissions.length >= 3) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ 
          error: 'Too many submissions. Please try again later.',
          details: 'Rate limit exceeded'
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse and validate input data
    const rawData = await req.json();
    const validationResult = LeadSubmissionSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid input data',
          details: validationResult.error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const leadData: LeadSubmissionRequest = validationResult.data;

    // Insert lead data using service role (bypasses RLS policies)
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .insert({
        first_name: leadData.first_name,
        last_name: leadData.last_name,
        email: leadData.email,
        phone: leadData.phone,
        interested_in: leadData.interested_in,
        price_range: leadData.price_range,
        is_realtor: leadData.is_realtor,
        newsletter_consent: leadData.contact_consent,
        privacy_consent: leadData.contact_consent,
        source: 'website',
        form_type: leadData.form_type,
        user_agent: leadData.user_agent,
        ip_address: clientIp
      })
      .select()
      .single();

    if (leadError) {
      console.error('Error saving lead:', leadError);
      return new Response(
        JSON.stringify({ error: 'Failed to save lead data' }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log('Lead saved successfully:', lead.id);

    // Add subscriber to Mailchimp
    try {
      const mailchimpApiKey = Deno.env.get('MAILCHIMP_API_KEY');
      const mailchimpAudienceId = Deno.env.get('MAILCHIMP_AUDIENCE_ID');
      
      console.log('Mailchimp integration check:', {
        hasApiKey: !!mailchimpApiKey,
        hasAudienceId: !!mailchimpAudienceId,
        hasConsent: leadData.contact_consent
      });
      
      if (mailchimpApiKey && mailchimpAudienceId && leadData.contact_consent) {
        console.log('Attempting to add subscriber to Mailchimp for:', leadData.email);
        
        // Extract datacenter from API key (part after the last dash)
        const datacenter = mailchimpApiKey.split('-').pop();
        const mailchimpUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;
        
        console.log('Mailchimp URL:', mailchimpUrl);
        
        const mailchimpPayload = {
          email_address: leadData.email,
          status: 'subscribed',
          merge_fields: {
            FNAME: leadData.first_name,
            LNAME: leadData.last_name,
            PHONE: leadData.phone || '',
          },
          tags: ['Union Village', 'Markham', leadData.form_type, leadData.interested_in].filter(Boolean),
        };
        
        console.log('Mailchimp payload:', JSON.stringify(mailchimpPayload, null, 2));
        
        const mailchimpResponse = await fetch(mailchimpUrl, {
          method: 'POST',
          headers: {
            'Authorization': `apikey ${mailchimpApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mailchimpPayload),
        });

        const responseText = await mailchimpResponse.text();
        
        if (mailchimpResponse.ok) {
          console.log('Successfully added subscriber to Mailchimp:', responseText);
        } else {
          console.error('Mailchimp subscription error - Status:', mailchimpResponse.status);
          console.error('Mailchimp error response:', responseText);
        }
      } else {
        console.log('Skipping Mailchimp - missing requirements:', {
          apiKey: !mailchimpApiKey ? 'MISSING' : 'present',
          audienceId: !mailchimpAudienceId ? 'MISSING' : 'present',
          consent: !leadData.contact_consent ? 'FALSE' : 'true'
        });
      }
    } catch (mailchimpError) {
      console.error('Failed to add to Mailchimp - Exception:', mailchimpError);
      // Don't fail the whole request if Mailchimp fails
    }

    // Send notification email with service role authorization
    try {
      const { error: notificationError } = await supabase.functions.invoke(
        'send-lead-notification',
        {
          body: { leadId: lead.id },
          headers: {
            Authorization: `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`
          }
        }
      );

      if (notificationError) {
        console.error('Notification error (non-critical):', notificationError);
        // Don't fail the whole request if notification fails
      }
    } catch (notificationError) {
      console.error('Failed to send notification:', notificationError);
      // Don't fail the whole request if notification fails
    }

    return new Response(JSON.stringify({ 
      success: true, 
      leadId: lead.id,
      message: 'Lead submitted successfully' 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in submit-lead function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);