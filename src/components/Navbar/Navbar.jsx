import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/asset 1.png";
import DarkLogo from '../../assets/asset 2.png';

// Navbar 
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 400) {
        setColorchange(true);
    }
    else {
        setColorchange(false);
    }
};
window.addEventListener('scroll', changeNavbarColor);
console.log(colorChange)

  return (
    <nav className={colorChange ? "header-container bg-change" : "header-container"}>
      <div className="header-left">
        <div className="logo">
          <a href="#">
            <img src={colorChange ? DarkLogo :Logo} alt="nTwist Logo" />
          </a>
        </div>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a  className={colorChange ? "link-color" : 'color-white'} href="#">Home</a>
          </li>
          <li>
            <a className={colorChange ? 'link-color' : 'color-white'} href="#">Industries</a>
          </li>
          <li>
            <a className={colorChange ? 'link-color' : 'color-white'} href="#">AI Software</a>
          </li>
          <li>
            <a className={colorChange ? 'link-color':'color-white'} href="#">Blog</a>
          </li>
          <li>
            <a className={colorChange ? 'link-color' : 'color-white'} href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
