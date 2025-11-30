// Load environment variables from server/.env
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Debug: confirm env variables are loaded
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS ? "Loaded" : "Missing");
console.log("MAIL_TO:", process.env.MAIL_TO);
console.log("MONGO_URI:", process.env.MONGO_URI);

// Configure mail transporter (Gmail SMTP + App Password)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// CONTACT form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, telephone, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("New contact submission:", req.body);

  try {
    await transporter.sendMail({
      from: `"Idris Foundation" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `New Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nTelephone: ${telephone}\nSubject: ${subject}\nMessage: ${message}`,
    });
    res.json({ success: true, message: "Contact form submitted and email sent" });
  } catch (err) {
    console.error("Error sending contact email:", err);
    res.status(500).json({ error: "Contact saved but email failed" });
  }
});

// VOLUNTEER form endpoint
app.post("/api/volunteer", async (req, res) => {
  const { name, email, interest, availability } = req.body;
  if (!name || !email || !interest || !availability) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("New volunteer submission:", req.body);

  try {
    await transporter.sendMail({
      from: `"Idris Foundation" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "New Volunteer Signup",
      text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\nAvailability: ${availability}`,
    });
    res.json({ success: true, message: "Volunteer form submitted and email sent" });
  } catch (err) {
    console.error("Error sending volunteer email:", err);
    res.status(500).json({ error: "Volunteer saved but email failed" });
  }
});

// REFERRAL form endpoint
app.post("/api/referral", async (req, res) => {
  const { name, email, referredName, referredEmail, notes } = req.body;
  if (!name || !email || !referredName || !referredEmail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("New referral submission:", req.body);

  try {
    await transporter.sendMail({
      from: `"Idris Foundation" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "New Referral Submission",
      text: `Referrer Name: ${name}\nReferrer Email: ${email}\nReferred Person: ${referredName}\nReferred Email: ${referredEmail}\nNotes: ${notes || "N/A"}`,
    });
    res.json({ success: true, message: "Referral form submitted and email sent" });
  } catch (err) {
    console.error("Error sending referral email:", err);
    res.status(500).json({ error: "Referral saved but email failed" });
  }
});

// DONATION form endpoint
app.post("/api/donate", async (req, res) => {
  const { name, email, amount } = req.body;
  if (!name || !email || !amount) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("New donation submission:", req.body);

  try {
    await transporter.sendMail({
      from: `"Idris Foundation" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "New Donation Submission",
      text: `Name: ${name}\nEmail: ${email}\nAmount: ${amount}`,
    });
    res.json({ success: true, message: "Donation form submitted and email sent" });
  } catch (err) {
    console.error("Error sending donation email:", err);
    res.status(500).json({ error: "Donation saved but email failed" });
  }
});

// Optional: friendly GET /
app.get("/", (req, res) => {
  res.send("Idris Foundation backend is running ✅");
});

app.listen(4000, () => {
  console.log("✅ Server running on http://localhost:4000");
});