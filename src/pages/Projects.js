import React from "react";
import "../style-projects.css"; 
import quickbills from "../assets/quickbills.png";
import login from "../assets/login.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "My Portfolio – Showcasing My Skills & Work",
    description: "Welcome to my personal portfolio website! This platform highlights my skills, projects, certifications, and experiences in software development. It serves as a digital resume, allowing visitors to explore my work, achievements, and ways to connect with me.",
    image: portfolio,
    link: "https://github.com/SaiHarshitha-2003/my-portfolio"
  },
  {
    title: "Login Page - Simple authentication interface.",
    description: "A Login Page is a user authentication interface that allows users to access by entering their username and password. It validates user credentials and grants access if they are correct; otherwise, it displays an error message. If a new user tries to log in, they can be registered automatically.",
    image: login,
    link: "https://github.com/SaiHarshitha-2003/Login-page-react"
  },
  {
    title: "QuickBills - Invoice Management",
    description: "QuickBills is a web-based invoice management system designed to simplify billing, payment tracking, and client management. It allows businesses and freelancers to generate, send, and manage invoices efficiently. The platform streamlines financial transactions, ensuring timely payments and better cash flow management.",
    image: quickbills,
    link: "https://github.com/SaiHarshitha-2003/quickbills"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img"/>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
