import React from "react";
import "./Footer.css";
import levelpro_white from './assets/levelpro_lightlogo.svg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src = {levelpro_white} ></img>
        <h2>helps you to supercharge your career fast.</h2>
        <button className="trial-button">Register a Free Consultation Now</button>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h4>Platform</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing & Plans</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Account</li>
            <li>Tools</li>
            <li>Newsletter</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legals</h4>
          <ul>
            <li>Guides</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Licensing</li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow us on:</h4>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
