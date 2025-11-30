// src/components/ProjectCard.jsx
import React from "react";
import "./ProjectCard.css"; // optional styling file

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} className="project-link">
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;