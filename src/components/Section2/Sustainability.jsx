import React from "react";
import "./sustainability.css";
import sustainabilityImg from "../../assets/asset 6.jpeg";


// Section 2 Sustainability 
const Sustainability = () => {
  return (
    <section className="section-sustainability container grid">
      <div>
        <img className="customImg" src={sustainabilityImg} alt="Environment Sustainability Image" />
      </div>
      <div>
        <h1>Sustainability</h1>

        <p>
          Environmental stewardship is a priority for NTWIST. We help our
          customers to minimize their sustainability impact on the planet.
          Emissions or environmental targets are used alongside productivity
          targets to define success for our customers.
        </p>
        <p>
          With the increasing relevance of carbon accounting and emissions
          tracking, NTWIST offers a suite of tools to increase visibility into
          environmental performance and help processing plants track, manage,
          optimize, and report key metrics.
        </p>

        <button className="secondary-btn">Read More</button>
      </div>
    </section>
  );
};

export default Sustainability;
