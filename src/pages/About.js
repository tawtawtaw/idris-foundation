// src/pages/About.jsx
import React from "react";
import "./AboutUs.css";

const team = [
  { name: "Tawfiq", role: "Lead Developer", bio: "Building scalable, mission-driven platforms for social impact.", img: "/images/pp.jpg" },
  { name: "Abdul", role: "Program Director", bio: "Oversees education and healthcare initiatives in Bangladesh.", img: "/images/pp2.jpg" },
  { name: "Namera", role: "Community Coordinator", bio: "Connects volunteers with local communities for maximum impact.", img: "/images/pp3.jpg" },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <h1>About Idris Foundation Reach</h1>
        <p>Our mission, vision, and values guide everything we do.</p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="about-mvv">
        <div className="mvv-card">
          <h2>Mission</h2>
          <p>To empower communities in Bangladesh through education, healthcare, and environmental action.</p>
        </div>
        <div className="mvv-card">
          <h2>Vision</h2>
          <p>A world where every child has access to learning, healthcare, and a sustainable future.</p>
        </div>
        <div className="mvv-card">
          <h2>Values</h2>
          <p>Transparency, compassion, sustainability, and community-driven impact.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Idris Foundation Reach was founded to address pressing challenges in Bangladesh. From classrooms to healthcare camps and tree plantation drives, we’ve been working tirelessly to create lasting change.
        </p>
      </section>

      {/* Team Profiles */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
<section className="about-impact">
  <h2>Our Impact</h2>
  <div className="impact-grid">
    <div className="impact-card">
      <h3>500+</h3>
      <p>Volunteers Engaged</p>
    </div>
    <div className="impact-card">
      <h3>10,000+</h3>
      <p>Trees Planted</p>
    </div>
    <div className="impact-card">
      <h3>2,000+</h3>
      <p>Students Supported</p>
    </div>
    <div className="impact-card">
      <h3>1,500+</h3>
      <p>Healthcare Beneficiaries</p>
    </div>
  </div>
</section>   
      {/* Call to Action */}
      <section className="about-cta">
        <a href="/volunteer" className="cta-btn">Join Us as a Volunteer</a>
        <a href="/donate" className="cta-btn">Donate Today</a>
      </section>
    </div>
  );
};

export default About;