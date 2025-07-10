import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ✅ Configure your SMTP details here
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.SMTP_USER, // e.g. your Gmail or SMTP username
    pass: process.env.SMTP_PASS, // SMTP password or App Password
  },
});

function generateConfirmationEmailHtml(name, logoUrl) {
  const year = new Date().getFullYear();
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0;">
      <div style="max-width:600px; margin:20px auto; background:#fff; padding:20px; border-radius:10px;">
        <div style="text-align:center; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding:20px; color:#fff;">
          <img src="${logoUrl}" style="width:120px;" alt="Logo" />
          <h1>Thank You!</h1>
        </div>
        <p>Hi ${name},</p>
        <p>Thanks for contacting <strong>Snapu Photography</strong>! We will reach out to you within 24 hours.</p>
        <blockquote style="border-left:4px solid #667eea; padding-left:10px;">"Capturing your special moments is our passion."</blockquote>
        <p>– The Snapu Team</p>
        <footer style="text-align:center; font-size:12px; color:#888;">&copy; ${year} Snapu Photography</footer>
      </div>
    </body>
    </html>
  `;
}

function generateAlertEmailHtml({ name, email, message, userIp }) {
  const now = new Date().toLocaleString();
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0;">
      <div style="max-width:600px; margin:20px auto; background:#fff; padding:20px; border-radius:10px;">
        <div style="background:#dc3545; color:#fff; text-align:center; padding:20px;">
          <h2>📥 New Contact Submission</h2>
        </div>
        <div style="margin-top:20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong> ${message || 'No message provided'}</p>
          <p><strong>IP Address:</strong> ${userIp}</p>
          <p><strong>Submitted:</strong> ${now}</p>
        </div>
        <footer style="text-align:center; font-size:12px; color:#888; margin-top:20px;">Snapu Photography - Admin Notification</footer>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name || 'Guest';
    const email = body.email || 'no-reply@example.com';
    const message = body.message || '';
    const userIp = request.headers.get('x-forwarded-for') || 'Unknown';

    const confirmationHtml = generateConfirmationEmailHtml(name, 'https://raw.githubusercontent.com/RupaSnapu/halfsareeEvent/refs/heads/main/public/logo.png');
    const alertHtml = generateAlertEmailHtml({ name, email, message, userIp });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: '"Snapu Photography" <${process.env.SMTP_USER}>',
      to: email,
      subject: 'Thank you for contacting Snapu!',
      html: confirmationHtml,
    });

    // Send alert email to admin
    await transporter.sendMail({
      from: '"Snapu Website" <${process.env.SMTP_USER}>',
      to: process.env.ADMIN_EMAIL, // <- Set this in .env (e.g., your email)
      subject: '📥 New Contact Submission',
      html: alertHtml,
    });

    return NextResponse.json({ success: true, message: 'Emails sent successfully.' });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ success: false, error: 'Failed to send emails.' }, { status: 500 });
  }
}
