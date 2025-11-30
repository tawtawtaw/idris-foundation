import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Referral from './pages/Referral';
import Education from './pages/Education';
import EyeSurgery from './pages/EyeSurgery';
import TreePlantation from './pages/TreePlantation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import VolunteerSuccess from "./pages/VolunteerSuccess";
import Events from "./pages/Events"
import Gallery from "./pages/Gallery";
import BlogDetail from "./pages/BlogDetail";
import AdminDashboard from "./components/AdminDashboard";
import ReferralSuccess from "./pages/ReferralSuccess";
import ContactSuccess from "./pages/ContactSuccess";






function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/education" element={<Education />} />
        <Route path="/eye-surgery" element={<EyeSurgery />} />
        <Route path="/tree-plantation" element={<TreePlantation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer-success" element={<VolunteerSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/referral-success" element={<ReferralSuccess />} />
        <Route path="/contact-success" element={<ContactSuccess />} />
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

