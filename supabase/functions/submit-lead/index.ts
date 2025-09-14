import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadSubmissionRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  interested_in?: string;
  price_range?: string;
  timeline?: string;
  message?: string;
  is_realtor: boolean;
  newsletter_consent: boolean;
  privacy_consent: boolean;
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

    const leadData: LeadSubmissionRequest = await req.json();
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
        timeline: leadData.timeline,
        message: leadData.message,
        is_realtor: leadData.is_realtor,
        newsletter_consent: leadData.newsletter_consent,
        privacy_consent: leadData.privacy_consent,
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