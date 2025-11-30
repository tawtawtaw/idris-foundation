// src/pages/Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import contactHero from "../assets/contact-hero.jpg"; // ✅ add a nice image

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Parse JSON response (only once)
      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error("Error parsing JSON response:", parseError);
        alert("Server returned an invalid response. Please try again later.");
        return;
      }

      console.log("Saved contact:", data);

      // Check response status
      if (!res.ok) {
        alert("Error saving contact: " + (data.error || `Server error: ${res.status} ${res.statusText}`));
        return;
      }

      // Check success flag
      if (data.success) {
        navigate("/contact-success");
      } else {
        alert("Error saving contact: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Error submitting contact:", err);
      alert("Failed to submit contact. Check backend connection or try again later.");
    }
  };

  return (
    <div className="contact-page">
      {/* ✅ Hero Banner */}
      <section className="contact-hero">
        <img src={contactHero} alt="Contact us" />
        <div className="hero-text">
          <h1>Get in Touch</h1>
          <p>
            We’d love to hear from you. Reach out with questions, ideas, or to
            join our mission.
          </p>
        </div>
      </section>

      {/* ✅ Form Section */}
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Telephone</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;