import React from "react";
import "./EyeSurgery.css";

const EyeSurgery = () => {
  return (
    <div className="eye-page">
      {/* Hero Section */}
      <section className="eye-hero">
        <h1>Eye Surgery Program</h1>
        <p>Restoring vision, transforming lives, and bringing hope to communities in need.</p>
      </section>

      {/* Impact Stats */}
      <section className="eye-stats">
        <div className="stat-card">
          <h2>👁️ 500+</h2>
          <p>Successful surgeries completed</p>
        </div>
        <div className="stat-card">
          <h2>🏥 20+</h2>
          <p>Partner hospitals and clinics</p>
        </div>
        <div className="stat-card">
          <h2>🌍 3</h2>
          <p>Regions served across Bangladesh</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="eye-story">
        <h2>Our Mission</h2>
        <p>
          The Eye Surgery Program provides free cataract and vision‑restoring surgeries to those who
          cannot afford them. By partnering with local hospitals and volunteer surgeons, we ensure
          that every patient receives quality care and a chance to see the world clearly again.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="eye-gallery">
        <h2>Highlights</h2>
        <div className="gallery-grid">
          <img src="/images/eye1.jpg" alt="Doctor performing eye surgery" />
          <img src="/images/eye2.jpg" alt="Patient after successful surgery" />
          <img src="/images/eye3.jpg" alt="Community outreach for eye care" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="eye-cta">
        <h2>Support Our Work</h2>
        <p>Help us bring vision back to those in need. Your donation makes a difference.</p>
        <a href="/donate" className="cta-button">Donate Now</a>
      </section>
    </div>
  );
};

export default EyeSurgery;