import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';
import { Md5 } from 'https://deno.land/std@0.190.0/hash/md5.ts';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const LeadSubmissionSchema = z.object({
  first_name: z.string().trim().min(1).max(100),
  last_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().or(z.literal('')),
  interested_in: z.string().max(100).nullable().optional(),
  price_range: z.string().max(50).nullable().optional(),
  is_realtor: z.boolean(),
  contact_consent: z.boolean(),
  form_type: z.string().max(50),
  user_agent: z.string().max(500)
});

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor 
      ? forwardedFor.split(',')[0].trim() 
      : req.headers.get('x-real-ip') || 'unknown';
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Rate limit
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { data: recentSubmissions } = await supabase
      .from('leads')
      .select('id, created_at')
      .eq('ip_address', clientIp)
      .gte('created_at', fiveMinutesAgo);

    if (recentSubmissions && recentSubmissions.length >= 3) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const rawData = await req.json();
    const validationResult = LeadSubmissionSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid input data',
          details: validationResult.error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const leadData = validationResult.data;

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
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log('Lead saved successfully:', lead.id);

    // Mailchimp sync
    let mailchimpStatus: 'new' | 'existing' | 'skipped' | 'failed' = 'skipped';
    try {
      const mailchimpApiKey = Deno.env.get('MAILCHIMP_API_KEY');
      const mailchimpAudienceId = Deno.env.get('MAILCHIMP_AUDIENCE_ID');
      
      if (mailchimpApiKey && mailchimpAudienceId && leadData.contact_consent) {
        const datacenter = mailchimpApiKey.split('-').pop();
        const emailLower = leadData.email.toLowerCase();
        
        const md5 = new Md5();
        md5.update(emailLower);
        const subscriberHash = md5.toString();
        
        const memberUrl = `https://${datacenter}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members/${subscriberHash}`;
        const authHeader = `apikey ${mailchimpApiKey}`;
        
        // Check if already a member
        const existsCheck = await fetch(memberUrl, {
          method: 'GET',
          headers: { 'Authorization': authHeader },
        });
        const alreadyExists = existsCheck.status === 200;
        console.log('Mailchimp existence check:', { email: emailLower, status: existsCheck.status, alreadyExists });
        
        const tags = ['Union Village', 'Markham', leadData.form_type, leadData.interested_in].filter(Boolean);
        
        const mailchimpPayload = {
          email_address: leadData.email,
          status_if_new: 'subscribed',
          merge_fields: {
            FNAME: leadData.first_name,
            LNAME: leadData.last_name,
            PHONE: leadData.phone || '',
          },
        };
        
        const mailchimpResponse = await fetch(memberUrl, {
          method: 'PUT',
          headers: { 'Authorization': authHeader, 'Content-Type': 'application/json' },
          body: JSON.stringify(mailchimpPayload),
        });

        const responseText = await mailchimpResponse.text();
        
        if (mailchimpResponse.ok) {
          mailchimpStatus = alreadyExists ? 'existing' : 'new';
          console.log(`Mailchimp upsert OK (${mailchimpStatus})`);
          
          const tagsResponse = await fetch(`${memberUrl}/tags`, {
            method: 'POST',
            headers: { 'Authorization': authHeader, 'Content-Type': 'application/json' },
            body: JSON.stringify({ tags: tags.map(name => ({ name, status: 'active' })) }),
          });
          if (tagsResponse.ok) {
            console.log('Tags applied:', tags.join(', '));
          } else {
            console.error('Tag failure:', tagsResponse.status, await tagsResponse.text());
          }
        } else {
          mailchimpStatus = 'failed';
          console.error('Mailchimp PUT failed:', mailchimpResponse.status, responseText);
        }
      } else {
        console.log('Skipping Mailchimp:', {
          apiKey: !!mailchimpApiKey,
          audienceId: !!mailchimpAudienceId,
          consent: leadData.contact_consent
        });
      }
    } catch (mailchimpError) {
      mailchimpStatus = 'failed';
      console.error('Mailchimp exception:', mailchimpError);
    }

    // Notification email
    try {
      await supabase.functions.invoke('send-lead-notification', {
        body: { leadId: lead.id },
        headers: { Authorization: `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}` }
      });
    } catch (notificationError) {
      console.error('Notification failed:', notificationError);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      leadId: lead.id,
      mailchimpStatus,
      message: 'Lead submitted successfully' 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in submit-lead function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
