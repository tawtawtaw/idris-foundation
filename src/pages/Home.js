import educationHero from '../assets/education-hero.jpg';
import React from 'react';
import './Home.css'; // ✅ import CSS

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="hero">
      <img src={educationHero} alt="Girl reading under tree" />
      <div className="hero-text">
        <h1>Uplifting communities in Bangladesh</h1>
        <p>
          Join us in planting seeds of hope through education, healthcare, and environmental action.
        </p>
      </div>
    </section>

    {/* Welcome Section */}
    <section className="welcome">
      <h1>Welcome to the Idris Foundation</h1>
      <p>Empowering lives through education, healthcare, and sustainability.</p>
    </section>
  </div>
);

export default Home;