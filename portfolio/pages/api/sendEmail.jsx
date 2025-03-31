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
    service: "gmail", // Or use another SMTP provider
    auth: {
      user: process.env.SMTP_USER, // Your email
      pass: process.env.SMTP_PASS, // Your email password or app password
    },
  });

  try {
    // Email to Admin
    await transporter.sendMail({
      from: email,
      to: "themagesh.v@gmail.com", // Your admin email
      subject: `New Contact Form Submission: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    // Confirmation Email to User
    await transporter.sendMail({
      from: "themagesh.v@gmail.com", // Your email
      to: email, // User's email
      subject: "Thank you for reaching out!",
      text: `Hello ${name},\n\nThank you for contacting me. I'll get back to you soon!\n\nBest,\nMagesh`,
      html: `<p>Hello <strong>${name}</strong>,</p><p>Thank you for reaching out! I'll get back to you soon.</p><p>Best,<br>Magesh</p>`,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send emails" });
  }
}
