import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // This loads the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/referral">Referral</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/eye-surgery">Eye Surgery</Link></li>
        <li><Link to="/tree-plantation">Tree Plantation</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;