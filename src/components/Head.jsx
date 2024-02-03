import React from "react";
import "../styles/head.css";
import Navbar from "./Navbar";
import peeps from "../assets/peeps.png";

const Head = () => {
  return (
    <div className="container">
      <div className="items">
        <Navbar />
        <div className="hero-section">
          <div>
            <h1>ARTEVOL8</h1>
            <p>Artevol8: Where creativity evolves into artistry. Crafting innovative designs that captivate and inspire.</p>
            <div className="btn">
              <a href="#about" className="lmore">
                Learn More
              </a>
            </div>
          </div>
          <div>
            <img src={peeps} alt="ARTEVOL8 banner" width="390px" className="clpped" />
          </div>
        </div>
      </div>
      <div className="circ"></div>
      <div className="dots"></div>
    </div>
  );
};

export default Head;
