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
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number too long"),
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
    // Create Supabase client with service role key (bypasses RLS)
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

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
    console.log('Processing lead submission:', leadData.email);

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
        user_agent: leadData.user_agent
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

    // Send notification email
    try {
      const { error: notificationError } = await supabase.functions.invoke(
        'send-lead-notification',
        {
          body: { leadId: lead.id }
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