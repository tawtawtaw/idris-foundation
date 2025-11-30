// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <p>© {new Date().getFullYear()} Idris Foundation</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/referral">Referral</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;