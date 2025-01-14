import React from "react";
import "./styles.scss";
const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-info">
        <div className="company">
          <h1>Company</h1>
          <ul>
            <li>Learn: Hidden Scrunch Leggings</li>
            <li>Create an Account</li>
            <li>My Account</li>
            <li>All Apparel</li>
            <li>Become an Ambassador</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Declaration</li>
            <li>Personal Information Access</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="help">
          <h1>Help</h1>
          <ul>
            <li>Returns</li>
            <li>Support</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="subscribe">
        <h1>GET EARLY ACCESS</h1>
        <p>Sign up to get access 1 hour before everyone else.</p>
        <div>
          <input type="text" placeholder="Enter your email" />
          <p>Subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
