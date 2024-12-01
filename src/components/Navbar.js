// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Black Rabbit Pvt Ltd</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "rotate1" : ""}`}></div>
        <div className={`line ${isOpen ? "fade" : ""}`}></div>
        <div className={`line ${isOpen ? "rotate2" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
