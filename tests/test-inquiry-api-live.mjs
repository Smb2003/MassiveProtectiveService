async function testInquiryApi() {
  console.log('--- Testing /api/inquiry Live Dispatch & Idempotency ---');

  const idempotencyKey = 'live-test-' + Date.now() + '-uuid4';

  const testPayload = {
    formSource: 'Aventura Security Consultation',
    fullName: 'Sophia Sterling',
    email: 'smb6925@gmail.com',
    phone: '(305) 555-0188',
    propertyType: 'Williams Island Luxury High-Rise',
    serviceNeeded: 'Armed Security Officers (Florida Class G)',
    targetDate: '2026-12-01',
    message: 'Requesting 24/7 dedicated Class G armed officers for penthouse access control.',
  };

  // 1. First submission
  console.log('1. Sending initial submission...');
  const res1 = await fetch('http://localhost:3000/api/inquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Idempotency-Key': idempotencyKey,
      'x-csrf-token': 'mps-tactical-token',
    },
    body: JSON.stringify(testPayload),
  });

  const data1 = await res1.json();
  console.log('Status 1:', res1.status, data1);

  if (!res1.ok || !data1.success || !data1.dispatchVerified) {
    console.error('❌ Failed initial submission');
    process.exit(1);
  }

  // 2. Duplicate submission with SAME Idempotency-Key (Fast double click simulation)
  console.log('2. Simulating duplicate click with same Idempotency-Key...');
  const res2 = await fetch('http://localhost:3000/api/inquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Idempotency-Key': idempotencyKey,
      'x-csrf-token': 'mps-tactical-token',
    },
    body: JSON.stringify(testPayload),
  });

  const data2 = await res2.json();
  const replayHeader = res2.headers.get('x-idempotent-replay');
  console.log('Status 2:', res2.status, 'Replay Header:', replayHeader, data2);

  if (res2.ok && data2.cached === true && replayHeader === 'true') {
    console.log('✔ IDEMPOTENCY LOCK VERIFIED: Duplicate submission returned cached replay without re-dispatching!');
  } else {
    console.error('❌ Idempotency failed');
    process.exit(1);
  }

  // 3. Validation failure test
  console.log('3. Testing field validation failure handling...');
  const res3 = await fetch('http://localhost:3000/api/inquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Idempotency-Key': 'bad-req-' + Date.now(),
      'x-csrf-token': 'mps-tactical-token',
    },
    body: JSON.stringify({ fullName: 'A', email: 'invalid-email', phone: '12' }),
  });

  const data3 = await res3.json();
  console.log('Status 3 (Validation check):', res3.status, data3);
  if (res3.status === 422 && data3.details) {
    console.log('✔ VALIDATION REJECTION VERIFIED: Incomplete fields rejected with 422 and field error descriptors!');
  } else {
    console.error('❌ Validation check failed');
    process.exit(1);
  }

  console.log('\n=============================================');
  console.log('✔ ALL API SECURITY & EMAIL DISPATCH TESTS PASSED!');
  console.log('=============================================');
}

testInquiryApi();
