import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Create a transporter for Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "8eb51d001@smtp-brevo.com",
        pass: "mLjV8f0aqh3X6nPr",
      },
      tls: {rejectUnauthorized: false},     
    });

    // Extract file content and convert to base64
    const cv = formData.get('cv') as File;
    const coverLetter = formData.get('coverLetter') as File | null;

    // Prepare email attachments
    const attachments = [];
    
    if (cv) {
      const cvBuffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cv.name,
        content: cvBuffer
      });
    }

    if (coverLetter) {
      const coverLetterBuffer = Buffer.from(await coverLetter.arrayBuffer());
      attachments.push({
        filename: coverLetter.name,
        content: coverLetterBuffer
      });
    }

    // Prepare email content
    const mailOptions = {
      from: `"Lalit" <no-reply@lugaskredderi.no>`,
      to: 'info@luganorge.no',
      subject: `New Job Application: ${formData.get('position')}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${formData.get('name')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p><strong>Phone:</strong> ${formData.get('phone') || 'Not provided'}</p>
        <p><strong>Position:</strong> ${formData.get('position')}</p>
        <p><strong>Portfolio/LinkedIn:</strong> ${formData.get('portfolio') || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.get('message') || 'Not provided'}</p>
      `,
      attachments
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Application submitted successfully' 
    }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      error: 'Failed to submit application' 
    }, { status: 500 });
  }
}
