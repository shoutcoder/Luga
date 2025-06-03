'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_NODEMAILER_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_NODEMAILER_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
  },
});

interface ContactEmailData {
  name: string;
  email: string;
  message: string;
  phone: string | null;
  category: string | null;
}

export const sendContactNotification = async (data: ContactEmailData) => {
  try {
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_SENDER_MAIL,
      to: 'LALIT@LUGA.NO',
      cc: 'admin@tigsaw.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Category:</strong> ${data.category || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
    `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
};
