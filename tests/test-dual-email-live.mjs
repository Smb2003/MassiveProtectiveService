import dotenv from 'dotenv';
dotenv.config();

import { sendDualInquiryEmails } from '../src/utils/mailer.ts';

async function testDualDispatch() {
  console.log('--- Testing Dual Email Dispatch via Live Gmail SMTP ---');
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('OWNER_EMAIL:', process.env.OWNER_EMAIL);

  const testPayload = {
    formSource: 'Miami Beach Executive Protection Consultation',
    fullName: 'Alexander Vance',
    email: 'smb6925+clienttest@gmail.com', // Sending client receipt to test alias
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

  const testMeta = {
    ip: '198.51.100.42',
    idempotencyKey: 'test-uuid-' + Date.now(),
    timestamp: new Date().toISOString(),
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) TestSuite/1.0',
  };

  try {
    const result = await sendDualInquiryEmails(testPayload, testMeta);
    console.log('Dispatch Results:', JSON.stringify(result, null, 2));
    if (result.internalSent && result.clientSent) {
      console.log(' SUCCESS: Both Owner Dispatch and Client Receipt sent via Gmail SMTP!');
      process.exit(0);
    } else {
      console.error(' PARTIAL OR FAILED DISPATCH:', result);
      process.exit(1);
    }
  } catch (err) {
    console.error(' FAILED DISPATCH EXCEPTION:', err);
    process.exit(1);
  }
}

testDualDispatch();
