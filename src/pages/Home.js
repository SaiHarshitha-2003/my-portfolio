import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assets/profile.jpg"; 
import "../styles.css"; 
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        {/* Text Section */}
        <div className="text-section">
          <h2>
            Hi, 
            <h2>I'm <span className="highlight">Sai Harshitha</span></h2>
          </h2>
          <h3>Aspiring Software Developer</h3>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>
      </div>

      <Link to="/contact" className="contact-btn">Contact</Link>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/sai-harshitha-tummala-035444257/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="linkedin" />
        </a>
        <a href="https://github.com/SaiHarshitha-2003" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="github" />
        </a>
      </div>
  </div>
  );
};

export default Home;
