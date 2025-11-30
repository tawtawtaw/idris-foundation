import React from "react";
import "./TreePlantation.css";

const TreePlantation = () => {
  return (
    <div className="tree-page">
      {/* Hero Section */}
      <section className="tree-hero">
        <h1>Tree Plantation Drive</h1>
        <p>Greening communities, restoring balance, and building a sustainable future.</p>
      </section>

      {/* Impact Stats */}
      <section className="tree-stats">
        <div className="stat-card">
          <h2>🌳 1,000+</h2>
          <p>Trees planted in Dhaka</p>
        </div>
        <div className="stat-card">
          <h2>👥 200+</h2>
          <p>Volunteers participated</p>
        </div>
        <div className="stat-card">
          <h2>🏫 15</h2>
          <p>Schools engaged in awareness</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="tree-story">
        <h2>Our Mission</h2>
        <p>
          The Tree Plantation Drive is part of our commitment to environmental action in Bangladesh.
          By planting trees in urban and rural areas, we aim to combat climate change, improve air
          quality, and inspire communities to protect nature.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="tree-gallery">
        <h2>Highlights</h2>
        <div className="gallery-grid">
          <img src="/images/tree1.jpg" alt="Volunteers planting trees" />
          <img src="/images/tree2.jpg" alt="Children joining plantation drive" />
          <img src="/images/tree3.jpg" alt="Community tree planting" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="tree-cta">
        <h2>Join Us</h2>
        <p>Be part of our next plantation drive and help us grow a greener future.</p>
        <a href="/volunteer" className="cta-button">Become a Volunteer</a>
      </section>
    </div>
  );
};

export default TreePlantation;