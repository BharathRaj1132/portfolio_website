import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png"; // place your BR logo PNG in src/assets/

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className="link">Home</NavLink></li>
        <li><NavLink to="/about" className="link">About</NavLink></li>
        <li><NavLink to="/projects" className="link">Projects</NavLink></li>
        <li><NavLink to="/skills" className="link">Skills</NavLink></li>
        <li><NavLink to="/contact" className="link">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
