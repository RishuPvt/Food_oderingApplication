import React from 'react';
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer mt-[35px] shadow-xl h-[256px]">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>support@example.com</li>
            <li> +1 (123) 456-7890</li>
            <li>123 Street, City, Country</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 FoodApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
