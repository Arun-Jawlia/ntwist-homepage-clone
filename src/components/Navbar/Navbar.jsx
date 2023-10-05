import React from "react";
import "./navbar.css";
import Logo from "../../assets/asset 1.png";

// Navbar 
const Navbar = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="nTwist Logo" />
          </a>
        </div>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Industries</a>
          </li>
          <li>
            <a href="#">AI Software</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
