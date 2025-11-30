// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      image: "/images/education.jpg",
      title: "Education for All",
      description: "Providing books, scholarships, and digital learning tools to children in rural Bangladesh.",
      link: "/projects/education"
    },
    {
      image: "/images/healthcare.jpg",
      title: "Community Healthcare",
      description: "Mobile clinics and health awareness programs reaching underserved communities.",
      link: "/projects/healthcare"
    },
    {
      image: "/images/environment.jpg",
      title: "Environmental Action",
      description: "Tree planting, clean water initiatives, and climate awareness campaigns.",
      link: "/projects/environment"
    }
  ];

  return (
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  );
};

export default Projects;