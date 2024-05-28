import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-[35px] shadow-xl h-[256px]">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>RishuPvt@example.com</li>
            <li> +91(123)1003 </li>
            <li>Knowledge Park III, Greater Noida, India</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li className="hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer">
              Facebook
            </li>
            <NavLink to="https://github.com/RishuPvt">
              <li className="hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer">
                Github
              </li>
            </NavLink>
            <li className="hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 cursor-pointer">
              Instagram
            </li>
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
};

export default Footer;
