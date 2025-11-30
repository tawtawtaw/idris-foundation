import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-page">
      {/* Hero Section */}
      <section className="education-hero">
        <h1>Education Program</h1>
        <p>Empowering students through scholarships, resources, and community support.</p>
      </section>

      {/* Impact Stats */}
      <section className="education-stats">
        <div className="stat-card">
          <h2>🎓 200+</h2>
          <p>Scholarships awarded</p>
        </div>
        <div className="stat-card">
          <h2>🏫 50+</h2>
          <p>Schools partnered</p>
        </div>
        <div className="stat-card">
          <h2>📚 1,000+</h2>
          <p>Books and resources distributed</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="education-story">
        <h2>Our Mission</h2>
        <p>
          Education is the foundation of opportunity. Through scholarships, mentorship, and
          community programs, we help students in Bangladesh continue their studies and achieve
          their dreams. Every child deserves the chance to learn and thrive.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="education-gallery">
        <h2>Highlights</h2>
        <div className="gallery-grid">
          <img src="/images/edu1.jpg" alt="Students receiving scholarships" />
          <img src="/images/edu2.jpg" alt="Classroom learning" />
          <img src="/images/edu3.jpg" alt="Community education event" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="education-cta">
        <h2>Support Education</h2>
        <p>Help us provide scholarships and resources to students in need.</p>
        <a href="/donate" className="cta-button">Donate Now</a>
      </section>
    </div>
  );
};

export default Education;