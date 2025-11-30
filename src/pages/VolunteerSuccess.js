// src/pages/VolunteerSuccess.jsx
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./VolunteerSuccess.css";

const VolunteerSuccess = () => {
  const [name, setName] = useState("Volunteer");
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem("volunteerName");
    if (storedName) {
      setName(storedName);
    }

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-page">
      {showConfetti && <Confetti />}
      <div className="success-card">
        <h1>🎉 Thank You, {name}!</h1>
        <p>
          Your volunteer application has been received. We’ll be in touch soon with
          opportunities to join our mission in education, healthcare, and environmental action.
        </p>
        <a href="/projects" className="success-btn">
          Explore Our Projects
        </a>
      </div>
    </div>
  );
};

export default VolunteerSuccess;