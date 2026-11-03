import nodemailer from 'nodemailer';

console.log('Testing SMTP with USER:', process.env.SMTP_USER);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function testConnection() {
  try {
    console.log('Verifying SMTP transporter configuration...');
    await transporter.verify();
    console.log('✔ SMTP Connection successfully established with Google!');

    const ownerEmail = process.env.OWNER_EMAIL || process.env.SMTP_USER;
    console.log('Sending test dispatch to Owner Email:', ownerEmail);

    const info = await transporter.sendMail({
      from: `"Massive Protective Services" <${process.env.SMTP_USER}>`,
      to: ownerEmail,
      subject: '[MPS TEST] Tactical SMTP Channel Operational',
      html: `
        <div style="background-color: #070D18; color: #FFF; padding: 20px; font-family: sans-serif;">
          <h2 style="color: #C5A880;">Massive Protective Services</h2>
          <p>SMTP integration verified live for owner dispatch: <strong>${ownerEmail}</strong>.</p>
          <p>Chapter 493, Florida Statutes | FDACS License #B1400200</p>
        </div>
      `,
    });

    console.log('✔ Email sent successfully!');
    console.log('✔ Message ID:', info.messageId);
    console.log('✔ Response:', info.response);
  } catch (error) {
    console.error('❌ SMTP test failed:', error);
  }
}

testConnection();
