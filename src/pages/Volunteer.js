// src/pages/Volunteer.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Volunteer.css";
import volunteerHero from "../assets/volunteer-hero.jpg"; // ✅ hero image

const Volunteer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/volunteer", {
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

      console.log("Saved volunteer:", data);

      // Check response status
      if (!res.ok) {
        alert("Error saving volunteer: " + (data.error || `Server error: ${res.status} ${res.statusText}`));
        return;
      }

      // Check success flag
      if (data.success) {
        navigate("/volunteer-success");
      } else {
        alert("Error saving volunteer: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Error submitting volunteer:", err);
      alert("Failed to submit volunteer. Check backend connection or try again later.");
    }
  };

  return (
    <div className="volunteer-page">
      {/* ✅ Hero Banner */}
      <section className="volunteer-hero">
        <img src={volunteerHero} alt="Volunteering" />
        <div className="hero-text">
          <h1>Join Our Mission</h1>
          <p>
            Become a volunteer and help us uplift communities through education,
            healthcare, and environmental action.
          </p>
        </div>
      </section>

      {/* ✅ Form Section */}
      <section className="volunteer-form">
        <h2>Sign Up to Volunteer</h2>
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
            <label>Area of Interest</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="">Select one</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="environment">Environment</option>
            </select>
          </div>

          <div className="form-group">
            <label>Availability</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="volunteer-btn">
            Become a Volunteer
          </button>
        </form>
      </section>
    </div>
  );
};

export default Volunteer;