import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/asset 1.png";
import DarkLogo from "../../assets/asset 2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

// Navbar
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [secondNavbar, setSecondNavbar] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  console.log(colorChange);

  return (
    <>
    <nav
      className={
        colorChange ? "header-container bg-change" : "header-container"
      }
    >
      <div className="header-left">
        <div className="logo">
          <a href="#">
            <img src={colorChange ? DarkLogo : Logo} alt="nTwist Logo" />
          </a>
        </div>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a className={colorChange ? "color-dark" : "color-light"} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={colorChange ? "color-dark" : "color-light"} href="#">
              Industries
            </a>
          </li>
          <li>
            <a className={colorChange ? "color-dark" : "color-light"} href="#">
              AI Software
            </a>
          </li>
          <li>
            <a className={colorChange ? "color-dark" : "color-light"} href="#">
              Blog
            </a>
          </li>
          <li>
            <a className={colorChange ? "color-dark" : "color-light"} href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div
        className={
          colorChange ? "Hamburger-menu" : "Hamburger-menu Hamburger-dark"
        }
      >
        <GiHamburgerMenu onClick={()=>setSecondNavbar(true)} />
      </div>

    </nav>
      <div  className={secondNavbar ? "second-navbar-active" : "second-navbar"}>
        <div className="second-navbar-header">
          <img src={DarkLogo} alt="" />
          <GrClose className="close-btn" onClick={()=>setSecondNavbar(false)}/>
        </div>
        <div className="second-navbar-nav-link">
        <ul>
          <li>
            <a onClick={()=>setSecondNavbar(false)} href="#">
              Home
            </a>
          </li>
          <li>
            <a onClick={()=>setSecondNavbar(false)}  href="#">
              Industries
            </a>
          </li>
          <li>
            <a onClick={()=>setSecondNavbar(false)}  href="#">
              AI Software
            </a>
          </li>
          <li>
            <a onClick={()=>setSecondNavbar(false)}  href="#">
              Blog
            </a>
          </li>
          <li>
            <a  onClick={()=>setSecondNavbar(false)} href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
        
      </div>
      </>
  );
};

export default Navbar;
