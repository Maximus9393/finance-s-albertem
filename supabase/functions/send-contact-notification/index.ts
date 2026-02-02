import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  referral_source: string;
}

const serviceLabels: Record<string, string> = {
  pojisteni: "Pojištění",
  investice: "Investice",
  hypoteky: "Hypotéky",
  planovani: "Finanční plánování",
  ostatni: "Ostatní",
};

const referralLabels: Record<string, string> = {
  web: "Webové stránky",
  facebook: "Facebook",
  instagram: "Instagram",
  google: "Google vyhledávání",
  doporuceni: "Doporučení známého",
  reklama: "Reklama",
  jine: "Jiné",
};

const handler = async (req: Request): Promise<Response> => {
  console.log("send-contact-notification function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactData = await req.json();
    console.log("Received contact data:", JSON.stringify(contactData));

    // Validate required fields
    if (!contactData.name || !contactData.email) {
      throw new Error("Missing required fields: name and email");
    }

    const serviceLabel = contactData.service 
      ? serviceLabels[contactData.service] || contactData.service 
      : "Neuvedeno";
    
    const referralLabel = referralLabels[contactData.referral_source] || contactData.referral_source;
    
    const currentDate = new Date().toLocaleString("cs-CZ", {
      timeZone: "Europe/Prague",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #C4A052 0%, #D4B062 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
          .value { font-size: 16px; color: #333; margin-top: 4px; }
          .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #C4A052; margin-top: 10px; }
          .footer { text-align: center; color: #888; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🔔 Nová poptávka z webu</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">${currentDate}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Jméno</div>
              <div class="value">${contactData.name}</div>
            </div>
            <div class="field">
              <div class="label">E-mail</div>
              <div class="value"><a href="mailto:${contactData.email}">${contactData.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Telefon</div>
              <div class="value">${contactData.phone || "Neuveden"}</div>
            </div>
            <div class="field">
              <div class="label">Oblast zájmu</div>
              <div class="value">${serviceLabel}</div>
            </div>
            <div class="field">
              <div class="label">Odkud se o vás dozvěděl</div>
              <div class="value">${referralLabel}</div>
            </div>
            ${contactData.message ? `
            <div class="field">
              <div class="label">Zpráva</div>
              <div class="message-box">${contactData.message}</div>
            </div>
            ` : ""}
          </div>
          <div class="footer">
            <p>Tato zpráva byla automaticky vygenerována z kontaktního formuláře na albertgurdzjan.cz</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("Sending email via Resend...");

    const emailResponse = await resend.emails.send({
      from: "Kontaktní formulář <onboarding@resend.dev>",
      to: ["albert.gurdzjan@4fin.cz"],
      subject: `Nová poptávka: ${contactData.name} - ${serviceLabel}`,
      html: htmlContent,
      reply_to: contactData.email,
    });

    console.log("Email sent successfully:", JSON.stringify(emailResponse));

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
