import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => {
  return (
    <nav>
      <h1>Sai Harshitha</h1>
      <div className="header">
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/projects">Projects</Link> 
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
