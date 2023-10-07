import React, { useState } from "react";
import "./homepage.css";
import Navbar from "../Navbar/Navbar";
import nTwistImg from "../../assets/asset 4.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import flagImg from '../../assets/asset 12.svg'

const Homepage = () => {
  const [show, hide] = useState(false);

  const scrollToTop = () => {
    if (window.scrollY >= 100) {
      hide(true);
    } else {
      hide(false);
    }
  };
  window.addEventListener("scroll", scrollToTop);
  return (
    <>
      {/* Import Navbar here */}
      <Navbar />

      <div className="home-container">
        <div className="home-main-container">
          <div className="home-container-left">
            <h1>Data-powered solutions</h1>
            <h1>for Industrial Excellence</h1>

            <button className="primary-btn">Read More</button>
          </div>
          <div className="home-container-right">
            <img src={nTwistImg} alt="Home Image" />
          </div>
        </div>

        <div
          onClick={() => window.scroll(0, 0)} //Function to scroll bottom to top
          className={show ? "btm-to-top" : "btm-to-top hide"}
        >
          <AiOutlineArrowUp />
        </div>

        <div className="flag-lang ">
          <img src={flagImg} alt='flag Image' />
          <h2>EN</h2>
        </div>

        
      </div>
    </>
  );
};

export default Homepage;
