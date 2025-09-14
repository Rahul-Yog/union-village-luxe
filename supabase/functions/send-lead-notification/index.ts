import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadNotificationRequest {
  leadId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { leadId }: LeadNotificationRequest = await req.json();
    console.log('Processing lead notification for ID:', leadId);

    // Fetch the lead details
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .select('*')
      .eq('id', leadId)
      .single();

    if (leadError || !lead) {
      console.error('Error fetching lead:', leadError);
      return new Response(
        JSON.stringify({ error: 'Lead not found' }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log('Lead details:', lead);

    // Format the lead information for the email
    const formatFormType = (type: string) => {
      switch (type) {
        case 'lead_form': return 'Website Lead Form';
        case 'floorplans': return 'Floor Plans Request';
        case 'siteplan': return 'Site Plan Request';
        case 'general': return 'General Inquiry';
        default: return 'Website Inquiry';
      }
    };

    const formatInterest = (interest: string) => {
      switch (interest) {
        case 'townhomes': return 'Townhomes';
        case 'condos': return 'Condominiums';
        case 'detached': return 'Detached Homes';
        default: return interest || 'Not specified';
      }
    };

    // Create the email HTML content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2c3e50; margin: 0; font-size: 28px;">🏠 New Lead - Union Village</h1>
            <div style="width: 60px; height: 3px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 15px auto;"></div>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
            <h2 style="color: #495057; margin: 0 0 15px 0; font-size: 20px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #212529;">${lead.first_name} ${lead.last_name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Email:</td>
                <td style="padding: 8px 0; color: #212529;"><a href="mailto:${lead.email}" style="color: #007bff; text-decoration: none;">${lead.email}</a></td>
              </tr>
              ${lead.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Phone:</td>
                <td style="padding: 8px 0; color: #212529;"><a href="tel:${lead.phone}" style="color: #007bff; text-decoration: none;">${lead.phone}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Realtor:</td>
                <td style="padding: 8px 0; color: #212529;">${lead.is_realtor ? '✅ Yes' : '❌ No'}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
            <h2 style="color: #495057; margin: 0 0 15px 0; font-size: 20px;">Lead Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d; width: 30%;">Source:</td>
                <td style="padding: 8px 0; color: #212529;">${formatFormType(lead.form_type || 'general')}</td>
              </tr>
              ${lead.interested_in ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Interest:</td>
                <td style="padding: 8px 0; color: #212529;">${formatInterest(lead.interested_in)}</td>
              </tr>
              ` : ''}
              ${lead.price_range ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Price Range:</td>
                <td style="padding: 8px 0; color: #212529;">${lead.price_range}</td>
              </tr>
              ` : ''}
              ${lead.timeline ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Timeline:</td>
                <td style="padding: 8px 0; color: #212529;">${lead.timeline}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6c757d;">Submitted:</td>
                <td style="padding: 8px 0; color: #212529;">${new Date(lead.created_at).toLocaleString()}</td>
              </tr>
            </table>
          </div>

          ${lead.message ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
            <h2 style="color: #495057; margin: 0 0 15px 0; font-size: 20px;">Message</h2>
            <p style="color: #212529; margin: 0; line-height: 1.6; white-space: pre-wrap;">${lead.message}</p>
          </div>
          ` : ''}

          <div style="background-color: #e9ecef; padding: 15px; border-radius: 6px; text-align: center;">
            <p style="color: #6c757d; margin: 0; font-size: 14px;">
              Newsletter Consent: ${lead.newsletter_consent ? 'Yes' : 'No'} | 
              Privacy Consent: ${lead.privacy_consent ? 'Yes' : 'No'}
            </p>
            <p style="color: #6c757d; margin: 5px 0 0 0; font-size: 12px;">
              Lead ID: ${lead.id}
            </p>
          </div>
        </div>
      </div>
    `;

    // Send the notification email
    const emailResponse = await resend.emails.send({
      from: "Union Village <onboarding@resend.dev>",
      to: ["your-email@example.com"], // Replace with your actual email
      subject: `🏠 New Lead: ${lead.first_name} ${lead.last_name} - ${formatFormType(lead.form_type || 'general')}`,
      html: emailHtml,
    });

    console.log("Lead notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-lead-notification function:", error);
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