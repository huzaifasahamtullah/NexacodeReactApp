import React from "react";
import "./PortfolioDemo.css";

const projects = [
  { title: "Project 1", imgSrc: "/Images/2.png" },
  { title: "Project 2", imgSrc: "/Images/3.png" },
  { title: "Project 3", imgSrc: "/Images/4.png" },
  { title: "Project 4", imgSrc: "/Images/5.png" },
  { title: "Project 1", imgSrc: "/Images/6.png" },
  { title: "Project 2", imgSrc: "/Images/7.png" },
  { title: "Project 1", imgSrc: "/Images/8.png" },
  { title: "Project 2", imgSrc: "/Images/9.png" },
];

const PortfolioGrid = () => {
  return (
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.imgSrc} alt={project.title} className="portfolio-image" />
          <div className="overlay">
            <h3 className="project-title">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
