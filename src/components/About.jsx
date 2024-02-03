import React from "react";
import peeps from "../assets/about.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <img src={peeps} alt="ARTEVOL8 banner" width="390px" className="clpped" />
      </div>
      <div>
        <b>About Us</b>
        <h1>ARTEVOL8 For Artistic Evolution</h1>
        <p>Where imagination meets innovation, crafting designs that transcend boundaries. We blend artistry with technology to create immersive experiences that inspire.</p>
        <div className="btn">
          <a href="#about" className="about-lmore">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
