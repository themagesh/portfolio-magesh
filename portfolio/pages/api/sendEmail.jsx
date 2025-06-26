import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // themagesh.v@gmail.com
      pass: process.env.SMTP_PASS, // Your Gmail App Password
    },
  });

  try {
    // Test connection first
    console.log('Testing SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection successful');

    // Email to Admin
    console.log('Sending email to admin...');
    await transporter.sendMail({
      from: process.env.SMTP_USER, // admin@themagesh.in
      to: "admin@themagesh.in", // Your admin email
      subject: `New Contact Form Submission: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });
    console.log('Admin email sent successfully');

    // Confirmation Email to User
    console.log('Sending confirmation email to user...');
    await transporter.sendMail({
      from: "admin@themagesh.in", // Your email
      to: email, // User's email
      subject: "Thank you for reaching out!",
      text: `Hello ${name},\n\nThank you for contacting me. I'll get back to you soon!\n\nBest,\nMagesh`,
      html: `<p>Hello <strong>${name}</strong>,</p><p>Thank you for reaching out! I'll get back to you soon.</p><p>Best,<br>Magesh</p>`,
    });
    console.log('Confirmation email sent successfully');

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error details:", {
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      command: error.command
    });
    res.status(500).json({ 
      message: "Failed to send emails",
      error: error.message 
    });
  }
}
