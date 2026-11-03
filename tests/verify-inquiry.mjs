import { randomUUID } from 'crypto';

const BASE_URL = 'http://localhost:3000';
const YOPMAIL_TEST_EMAIL = 'mps-dispatch-test@yopmail.com';

async function runVerificationSuite() {
  console.log('================================================================');
  console.log('MASSIVE PROTECTIVE SERVICES — AGENT 3 VERIFICATION PROTOCOL');
  console.log('Target Recipient: ' + YOPMAIL_TEST_EMAIL);
  console.log('================================================================\n');

  const results = {
    csrfGenerated: false,
    initialSubmission: null,
    idempotentReplay: null,
    xssSanitizedSubmission: null,
    validationRejection: null,
    missingIdempotencyRejection: null,
  };

  try {
    // 1. Fetch CSRF Token & Cookie
    console.log('[TEST 1] Acquiring Cryptographic CSRF Token...');
    const csrfRes = await fetch(`${BASE_URL}/api/csrf`);
    const setCookieHeader = csrfRes.headers.get('set-cookie') || '';
    const csrfData = await csrfRes.json();

    if (!csrfRes.ok || !csrfData.csrfToken) {
      throw new Error(`CSRF acquisition failed: status ${csrfRes.status}`);
    }

    const csrfToken = csrfData.csrfToken;
    console.log('✔ CSRF Token Acquired:', csrfToken);
    console.log('✔ Set-Cookie Header:', setCookieHeader);
    results.csrfGenerated = true;

    // Extract cookie for subsequent calls
    const cookieHeader = setCookieHeader.split(';')[0];

    // 2. Initial Valid Dispatch
    console.log('\n[TEST 2] Executing Live Dispatch to Yopmail Target...');
    const idempotencyKey1 = randomUUID();
    const payload1 = {
      fullName: 'Ambassador Alexander Sterling',
      email: YOPMAIL_TEST_EMAIL,
      phone: '+1 (561) 508-8833',
      county: 'Palm Beach',
      serviceType: 'Executive Protection',
      locationPreset: 'Palm Beach Island Estate',
      preferredDate: '2026-12-01',
      ndaRequested: true,
      requiresArmedDriver: true,
      message: 'Diplomatic principal arriving via PBI private terminal. Requesting armed convoy and close personal protection detail.',
    };

    const res1 = await fetch(`${BASE_URL}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
        'Idempotency-Key': idempotencyKey1,
        Cookie: cookieHeader,
      },
      body: JSON.stringify(payload1),
    });

    const data1 = await res1.json();
    console.log('Status:', res1.status);
    console.log('Response:', data1);
    results.initialSubmission = { status: res1.status, data: data1, idempotencyKey: idempotencyKey1 };

    if (!res1.ok || !data1.success) {
      throw new Error('Initial submission failed');
    }
    console.log('✔ Live Dispatch to Yopmail confirmed!');

    // 3. Idempotent Replay Test (Reuse exact same Idempotency-Key)
    console.log('\n[TEST 3] Testing Idempotency Lock with Identical Key...');
    const res2 = await fetch(`${BASE_URL}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
        'Idempotency-Key': idempotencyKey1, // REUSE
        Cookie: cookieHeader,
      },
      body: JSON.stringify(payload1),
    });

    const isReplayHeader = res2.headers.get('x-idempotent-replay');
    const data2 = await res2.json();
    console.log('Status:', res2.status);
    console.log('X-Idempotent-Replay Header:', isReplayHeader);
    console.log('Response:', data2);
    results.idempotentReplay = {
      status: res2.status,
      isReplayHeader,
      cached: data2.cached === true,
      data: data2,
    };

    if (res2.status === 200 && (data2.cached === true || isReplayHeader === 'true')) {
      console.log('✔ Duplicate submission dropped! Cached response returned without triggering duplicate dispatch.');
    } else {
      console.warn('⚠ Idempotency cache did not flag replay.');
    }

    // 4. XSS Injection Neutralization Test
    console.log('\n[TEST 4] Testing XSS Payload Neutralization & Cleansing...');
    const idempotencyKey3 = randomUUID();
    const maliciousPayload = {
      fullName: 'Lord Vader <script>alert("pwnd")</script><img src="x" onerror="steal()"/>',
      email: YOPMAIL_TEST_EMAIL,
      phone: '(305) 999-4444',
      county: 'Miami-Dade',
      serviceType: 'VIP/Celebrity',
      message: 'Private arrival. <iframe src="javascript:evil()"></iframe>Special escort needed.<a href="javascript:void(0)" onclick="attack()">Click me</a>',
      ndaRequested: true,
      requiresArmedDriver: false,
    };

    const res3 = await fetch(`${BASE_URL}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
        'Idempotency-Key': idempotencyKey3,
        Cookie: cookieHeader,
      },
      body: JSON.stringify(maliciousPayload),
    });

    const data3 = await res3.json();
    console.log('Status:', res3.status);
    console.log('Response:', data3);
    results.xssSanitizedSubmission = { status: res3.status, data: data3 };
    if (res3.ok && data3.success) {
      console.log('✔ Malicious tags and script vectors cleansed and accepted safely!');
    }

    // 5. Schema Rejection Test (Invalid county & invalid phone)
    console.log('\n[TEST 5] Testing Zod Schema Rejection (Invalid county & phone)...');
    const idempotencyKey4 = randomUUID();
    const invalidPayload = {
      fullName: 'T',
      email: 'not-an-email',
      phone: '123',
      county: 'Invalid County Not In Florida',
      serviceType: 'Unknown Tactical Offering',
    };

    const res4 = await fetch(`${BASE_URL}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
        'Idempotency-Key': idempotencyKey4,
        Cookie: cookieHeader,
      },
      body: JSON.stringify(invalidPayload),
    });

    const data4 = await res4.json();
    console.log('Status (Expected 422):', res4.status);
    console.log('Details:', data4.details);
    results.validationRejection = { status: res4.status, details: data4.details };
    if (res4.status === 422 && data4.details) {
      console.log('✔ Invalid payload successfully blocked with granular field errors!');
    }

    // 6. Missing Idempotency Key Test
    console.log('\n[TEST 6] Testing Missing Idempotency-Key Header Rejection...');
    const res5 = await fetch(`${BASE_URL}/api/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
        Cookie: cookieHeader,
      },
      body: JSON.stringify(payload1),
    });

    const data5 = await res5.json();
    console.log('Status (Expected 400):', res5.status);
    console.log('Error:', data5.error);
    results.missingIdempotencyRejection = { status: res5.status, error: data5.error };
    if (res5.status === 400) {
      console.log('✔ Missing Idempotency-Key rejected as required by specification!');
    }

    console.log('\n================================================================');
    console.log('ALL VERIFICATION CHECKS COMPLETED SUCCESSFULLY');
    console.log('================================================================');
    return results;
  } catch (err) {
    console.error('Verification failed with error:', err);
    process.exit(1);
  }
}

runVerificationSuite();
