import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">
        <h3>FoodPardise.com</h3>
        <p>
          FoodParadise is a place where you can please your soul and tummy with
          delicous food recipes of all cuisine. And our servise is absolutly
          free.
        </p>
        <p>© 2024 | All Rights Reserved</p>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>FoodParadise.com</p>
        <p>+91 7077 336912</p>
        <p>Bangaluru, India</p>
      </div>

      <div className="footer-social">
        <h3>Socials</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default Footer;
