import fs from 'fs';
import path from 'path';

// Load mailer content and extract templates
const mailerFile = fs.readFileSync('src/utils/mailer.ts', 'utf8');

// Sample test data
const sampleInquiry = {
  formSource: 'Miami Beach Executive Protection',
  fullName: 'Alexander Vance',
  email: 'alexander.vance@vanceholdings.com',
  phone: '(305) 555-0199',
  location: 'Miami Beach / Star Island',
  serviceType: 'Armed Close Protection & Motorcade',
  preferredDate: 'Immediate Deployment (24 Hours)',
  propertyType: 'Waterfront Estate & Private Dock',
  venueProfile: 'Private Residence & Yacht Escort',
  requiresArmedDriver: true,
  ndaRequested: true,
  message: 'High-profile principal arriving MIA via private charter. Need 2 Class G armed officers and armored Suburban transfer to Star Island estate.',
};

const sampleMeta = {
  ip: '198.51.100.42',
  idempotencyKey: 'test-preview-key-12345',
  timestamp: new Date().toISOString(),
};

// We will generate the preview files directly
const humanTime = 'Tuesday, Nov 3, 2026 at 7:51 PM EST';

const internalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>New Client Inquiry: Alexander Vance</title>
  <style>
    body { margin: 0; padding: 0; background-color: #080D1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #FFFFFF; }
    table { border-collapse: collapse; }
    @media only screen and (max-width: 620px) {
      .outer-wrap { padding: 12px 6px !important; }
      .main-card { width: 100% !important; border-radius: 6px !important; }
      .section-padding { padding: 20px 16px !important; }
      .header-title { font-size: 22px !important; line-height: 1.3 !important; }
      .phone-btn { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; margin-bottom: 12px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #080D1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" class="outer-wrap" style="background-color: #080D1A; padding: 28px 12px; margin: 0 auto;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" class="main-card" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; width: 100%; margin: 0 auto; background-color: #0E1628; border: 1px solid #23334E; border-radius: 8px; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.5);">
          
          <!-- Top Gold Accent Bar -->
          <tr>
            <td height="5" style="background-color: #C5A880; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="section-padding" style="padding: 26px 28px 20px; border-bottom: 1px solid #1E2D47; background-color: #0B1220;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.22em; color: #C5A880; text-transform: uppercase; margin-bottom: 6px;">
                      MASSIVE PROTECTIVE SERVICES
                    </div>
                    <h1 class="header-title" style="margin: 0; font-size: 23px; font-weight: 700; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.3;">
                      New Consultation Inquiry
                    </h1>
                    <div style="font-size: 13px; color: #CBD5E1; margin-top: 6px;">
                      Received from <strong>Miami Beach Executive Protection</strong> &bull; ${humanTime}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Primary Contact Card (Instant Tap-to-Call) -->
          <tr>
            <td class="section-padding" style="padding: 22px 28px; background-color: #121C31; border-bottom: 1px solid #1E2D47;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: #C5A880; text-transform: uppercase; margin-bottom: 8px;">
                Client Contact Information
              </div>
              <div style="font-size: 20px; font-weight: 700; color: #FFFFFF; margin-bottom: 14px;">
                Alexander Vance
              </div>

              <!-- Quick Action Row -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding-bottom: 10px;">
                    <a href="tel:(305) 555-0199" class="phone-btn" style="display: inline-block; background-color: #C5A880; color: #080D1A; font-weight: 700; font-size: 15px; text-decoration: none; padding: 11px 22px; border-radius: 4px; letter-spacing: 0.03em;">
                      &#128222;&nbsp; Call (305) 555-0199
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 14px; color: #CBD5E1;">
                    Direct Email: <a href="mailto:alexander.vance@vanceholdings.com" style="color: #60A5FA; font-weight: 600; text-decoration: underline;">alexander.vance@vanceholdings.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Request Details (Stacked, High Contrast, Perfectly Readable on Mobile) -->
          <tr>
            <td class="section-padding" style="padding: 24px 28px;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.15em; color: #C5A880; text-transform: uppercase; margin-bottom: 16px;">
                Security Consultation Requirements
              </div>

              <!-- Service Field -->
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47;">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Service Requested
                </div>
                <div style="font-size: 16px; font-weight: 700; color: #FFFFFF;">
                  Armed Close Protection & Motorcade
                </div>
              </div>

              <!-- Location Field -->
              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47;">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Location / Territory
                </div>
                <div style="font-size: 16px; font-weight: 700; color: #FFFFFF;">
                  Miami Beach / Star Island
                </div>
              </div>

              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47;">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Timeline / Expected Start
                </div>
                <div style="font-size: 15.5px; font-weight: 600; color: #FFFFFF;">
                  Immediate Deployment (24 Hours)
                </div>
              </div>

              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47;">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Confidential Non-Disclosure Agreement
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #FFFFFF;">
                  &#10003; Mutual NDA Requested Prior to Consultation
                </div>
              </div>

              <div style="margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #1E2D47;">
                <div style="font-size: 11.5px; font-weight: 600; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px;">
                  Armed Driver / Transportation
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #FFFFFF;">
                  &#10003; Armed Driver & Escort Vehicle Requested
                </div>
              </div>

              <div style="margin-top: 18px; padding: 16px; background-color: #0B1220; border-left: 3px solid #C5A880; border-radius: 4px;">
                <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: #C5A880; text-transform: uppercase; margin-bottom: 8px;">
                  Client Message / Operational Scope:
                </div>
                <div style="font-size: 14.5px; line-height: 1.6; color: #F1F5F9; white-space: pre-wrap;">High-profile principal arriving MIA via private charter. Need 2 Class G armed officers and armored Suburban transfer to Star Island estate.</div>
              </div>
            </td>
          </tr>

          <!-- Footer Information -->
          <tr>
            <td style="background-color: #090E1A; padding: 20px 24px; border-top: 1px solid #1E2D47; text-align: center;">
              <div style="font-size: 12px; color: #CBD5E1; line-height: 1.6;">
                <strong>Massive Protective Services Inc.</strong> &bull; Delray Beach, Florida<br>
                FL Agency License #B1400200 &bull; Chapter 493, Florida Statutes<br>
                24/7 Priority Dispatch: <a href="tel:9542347231" style="color: #D4AF37; text-decoration: none; font-weight: 700;">(954) 234-7231</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

const clientHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>Security Consultation Request Received — Massive Protective Services</title>
  <style>
    body { margin: 0; padding: 0; background-color: #080D1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #FFFFFF; }
    table { border-collapse: collapse; }
    @media only screen and (max-width: 620px) {
      .outer-wrap { padding: 12px 6px !important; }
      .main-card { width: 100% !important; border-radius: 6px !important; }
      .section-padding { padding: 22px 18px !important; }
      .header-title { font-size: 22px !important; line-height: 1.3 !important; }
      .hotline-btn { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #080D1A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #FFFFFF;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" class="outer-wrap" style="background-color: #080D1A; padding: 28px 12px; margin: 0 auto;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" class="main-card" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; width: 100%; margin: 0 auto; background-color: #0E1628; border: 1px solid #23334E; border-radius: 8px; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.5);">
          
          <!-- Top Gold Accent Bar -->
          <tr>
            <td height="5" style="background-color: #C5A880; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td class="section-padding" style="padding: 28px 30px 22px; border-bottom: 1px solid #1E2D47; background-color: #0B1220;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.22em; color: #C5A880; text-transform: uppercase; margin-bottom: 6px;">
                MASSIVE PROTECTIVE SERVICES
              </div>
              <h1 class="header-title" style="margin: 0; font-size: 23px; font-weight: 700; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.3;">
                Consultation Request Received
              </h1>
              <div style="font-size: 13px; color: #CBD5E1; margin-top: 6px;">
                Florida Agency License #B1400200 &bull; Delray Beach, Florida
              </div>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td class="section-padding" style="padding: 26px 30px;">
              <p style="font-size: 16px; line-height: 1.6; color: #FFFFFF; margin: 0 0 16px 0;">
                Dear Alexander Vance,
              </p>
              
              <p style="font-size: 15px; line-height: 1.7; color: #F1F5F9; margin: 0 0 18px 0;">
                Thank you for contacting Massive Protective Services. We have safely received your consultation inquiry regarding <strong>Armed Close Protection &amp; Motorcade</strong> in <strong>Miami Beach / Star Island</strong>.
              </p>

              <p style="font-size: 15px; line-height: 1.7; color: #F1F5F9; margin: 0 0 22px 0;">
                A senior protective coordinator is reviewing your operational requirements and will reach out to you directly within two hours for a private, confidential consultation.
              </p>

              <!-- Request Summary Box (Clean, High Contrast, Readable on Any Screen) -->
              <div style="background-color: #121C31; border: 1px solid #1E2D47; border-left: 3px solid #C5A880; border-radius: 4px; padding: 18px 20px; margin: 0 0 24px 0;">
                <div style="font-size: 11.5px; font-weight: 700; letter-spacing: 0.12em; color: #C5A880; text-transform: uppercase; margin-bottom: 12px;">
                  Summary of Your Request
                </div>

                <div style="margin-bottom: 10px;">
                  <span style="font-size: 12px; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.04em;">Service:</span><br>
                  <strong style="font-size: 15.5px; color: #FFFFFF;">Armed Close Protection &amp; Motorcade</strong>
                </div>

                <div style="margin-bottom: 10px;">
                  <span style="font-size: 12px; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.04em;">Territory / Location:</span><br>
                  <strong style="font-size: 15.5px; color: #FFFFFF;">Miami Beach / Star Island</strong>
                </div>

                <div style="margin-bottom: 10px;">
                  <span style="font-size: 12px; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.04em;">Preferred Start Date:</span><br>
                  <strong style="font-size: 15px; color: #FFFFFF;">Immediate Deployment (24 Hours)</strong>
                </div>

                <div>
                  <span style="font-size: 12px; color: #CBD5E1; text-transform: uppercase; letter-spacing: 0.04em;">Inquiry Date:</span><br>
                  <span style="font-size: 14px; color: #FFFFFF;">${humanTime}</span>
                </div>
              </div>

              <!-- Immediate Assistance Card -->
              <div style="background-color: #0B1220; border: 1px solid #2A3B57; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
                <div style="font-size: 13.5px; font-weight: 700; color: #C5A880; margin-bottom: 6px;">
                  Need Immediate Assistance or Same-Day Deployment?
                </div>
                <div style="font-size: 14px; line-height: 1.6; color: #E2E8F0; margin-bottom: 14px;">
                  If your inquiry requires urgent coordination or same-day protection, please reach our watch commander directly at our 24/7 Priority Dispatch desk:
                </div>
                <a href="tel:9542347231" class="hotline-btn" style="display: inline-block; background-color: #C5A880; color: #080D1A; font-weight: 700; font-size: 15px; text-decoration: none; padding: 11px 22px; border-radius: 4px; letter-spacing: 0.03em;">
                  &#128222;&nbsp; Call (954) 234-7231
                </a>
              </div>

              <!-- Confidentiality Notice -->
              <p style="font-size: 13.5px; line-height: 1.6; color: #CBD5E1; margin: 0 0 20px 0;">
                <strong>Strict Confidentiality:</strong> Massive Protective Services is a licensed Florida security agency (License #B1400200) operating under Florida Statutes Chapter 493. All client discussions, identities, and itineraries remain strictly confidential under Florida law. Mutual non-disclosure agreements are available prior to operational review.
              </p>

              <!-- Sign-off -->
              <div style="border-top: 1px solid #1E2D47; padding-top: 18px; font-size: 14px; line-height: 1.6; color: #FFFFFF;">
                Sincerely,<br>
                <strong style="color: #C5A880;">Operations Command Desk</strong><br>
                Massive Protective Services Inc.<br>
                Delray Beach Headquarters
              </div>
            </td>
          </tr>

          <!-- Footer Information -->
          <tr>
            <td style="background-color: #090E1A; padding: 20px 24px; border-top: 1px solid #1E2D47; text-align: center;">
              <div style="font-size: 12px; color: #CBD5E1; line-height: 1.6;">
                <strong>Massive Protective Services Inc.</strong> &bull; Delray Beach, Florida<br>
                FL Agency License #B1400200 &bull; Florida Statutes Chapter 493<br>
                24/7 Priority Dispatch: <a href="tel:9542347231" style="color: #D4AF37; text-decoration: none; font-weight: 700;">(954) 234-7231</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

fs.mkdirSync('public/email-preview', { recursive: true });
fs.writeFileSync('public/email-preview/internal.html', internalHtml, 'utf8');
fs.writeFileSync('public/email-preview/client.html', clientHtml, 'utf8');
console.log('✔ Preview HTML files written to public/email-preview/');
