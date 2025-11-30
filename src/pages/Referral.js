// src/pages/Referral.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Referral.css";
import referralHero from "../assets/referral-hero.jpg";

const Referral = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referredName: "",
    referredEmail: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/referral", {
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

      console.log("Saved referral:", data);

      // Check response status
      if (!res.ok) {
        alert("Error saving referral: " + (data.error || `Server error: ${res.status} ${res.statusText}`));
        return;
      }

      // Check success flag
      if (data.success) {
        navigate("/referral-success");
      } else {
        alert("Error saving referral: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Error submitting referral:", err);
      alert("Failed to submit referral. Check backend connection or try again later.");
    }
  };

  return (
    <div className="referral-page">
      <section className="referral-hero">
        <img src={referralHero} alt="Refer a friend" />
        <div className="hero-text">
          <h1>Spread the Word</h1>
          <p>
            Refer a friend to join our mission and help us grow a community of
            changemakers.
          </p>
        </div>
      </section>

      <section className="referral-form">
        <h2>Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Friend's Name</label>
            <input
              type="text"
              name="referredName"
              value={formData.referredName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Friend's Email</label>
            <input
              type="email"
              name="referredEmail"
              value={formData.referredEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="referral-btn">
            Send Referral
          </button>
        </form>
      </section>
    </div>
  );
};

export default Referral;