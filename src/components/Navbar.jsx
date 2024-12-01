import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import levelpro_logo from './assets/levelpro_logo.svg';
import levelpro_lightlogo from './assets/levelpro_lightlogo.svg';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img
            src={isScrolled ? levelpro_lightlogo : levelpro_logo}
            alt="LevelPro Logo"
          />
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* CTA Buttons */}
        <div className="cta">
          <button className="cta-primary">Enroll Now</button>
          <button className="cta-secondary">Contact Us</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
