import React from "react";
import "./minetomill.css";
import millToMineImg from "../../assets/asset 5.jpeg";

// Section 3 
const MineToMill = () => {
  return (
    <section className="section-mill-mine container">
      <div>
        <h1>Mine-To-Mill-To-Mine Optimization</h1>

        <p>
          NTWIST’s newest product unlocks up to $250/oz in previously
          inaccessible value in open pit gold mines by connecting siloed data
          sources like block models, fleet management systems, stockpile
          surveys, and plant instruments. This allows your company to better
          track material flow, and feed properties, identify plan/production
          discrepancies, and correct resource models and production plans.
        </p>

        <button className="secondary-btn">Read More</button>
      </div>
      <div>
        <img className="machineImg" src={millToMineImg} alt="NTwist Mining Machine Image" />
      </div>
    </section>
  );
};

export default MineToMill;
