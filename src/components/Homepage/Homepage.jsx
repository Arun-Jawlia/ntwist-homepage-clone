import React from "react";
import "./homepage.css";
import Navbar from "../Navbar/Navbar";
import nTwistImg from "../../assets/asset 4.png";

const Homepage = () => {
  return (
    <>
    {/* Import Navbar here */}
      <Navbar />

      {/* Container  */}
      <div className="home-container">
        <div className="home-main-container">
          <div className="home-container-left">
            <h2>Data-powered solutions</h2>
            <h2>for Industrial Excellence</h2>

            <button className="primary-btn">Read More</button>
          </div>
          <div className="home-container-right">
            <img src={nTwistImg} alt=" HomePage Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
