// test-mail.js
require("dotenv").config();
const nodemailer = require("nodemailer");

async function main() {
  try {
    // Configure Gmail SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // App Password (no spaces)
      },
    });

    // Send a test email
    let info = await transporter.sendMail({
      from: `"Idris Foundation" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "Test Email from Nodemailer",
      text: "This is a test email sent using Gmail + App Password setup.",
    });

    console.log("✅ Message sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error sending test email:", err);
  }
}

main();