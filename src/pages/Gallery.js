// src/pages/Gallery.jsx
import React, { useState } from "react";
import "./Gallery.css";

const images = [
  // 📚 Education
  { src: "/images/Gallery6.jpg", alt: "Children learning in classroom", category: "Education" },
  { src: "/images/education2.jpg", alt: "Volunteer teaching digital literacy", category: "Education" },
  { src: "/images/education3.jpg", alt: "School supplies distribution", category: "Education" },

  // 🏥 Healthcare
  { src: "/images/Gallery4.jpg", alt: "Community health camp checkup", category: "Healthcare" },
  { src: "/images/Gallery5.jpg", alt: "Doctors providing free medical care", category: "Healthcare" },
  { src: "/images/Gallery1.jpg", alt: "Awareness session on hygiene", category: "Healthcare" },

  // 🌱 Environment
  { src: "/images/Gallery7.jpg", alt: "Tree plantation drive", category: "Environment" },
  { src: "/images/Gallery8.jpg", alt: "Volunteers cleaning riverside", category: "Environment" },
  { src: "/images/Gallery9.jpg", alt: "Community recycling initiative", category: "Environment" },

  // 🎉 Events
  { src: "/images/event1.jpg", alt: "Fundraising gala dinner", category: "Events" },
  { src: "/images/event2.jpg", alt: "Volunteer workshop in Dhaka", category: "Events" },
  { src: "/images/event3.jpg", alt: "Charity awareness campaign", category: "Events" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Education", "Healthcare", "Environment", "Events"];

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <h1>Our Work in Action</h1>
        <p>Explore moments from our projects and community impact.</p>
      </section>

      {/* Category Filters */}
      <section className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Image Grid */}
      <section className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(img.src)}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}

      {/* Call to Action */}
      <section className="gallery-cta">
        <a href="/volunteer" className="cta-btn">Join Us as a Volunteer</a>
        <a href="/donate" className="cta-btn">Donate Today</a>
      </section>
    </div>
  );
};

export default Gallery;