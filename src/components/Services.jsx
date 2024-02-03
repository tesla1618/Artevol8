import React from "react";
import "../styles/services.css";
import peeps from "../assets/about.png";
import ui from "../assets/ui.png";
import branding from "../assets/branding.png";
import games from "../assets/games.png";
import marketing from "../assets/marketing.png";

const Services = () => {
  return (
    <div className="scontainer" id="services">
      <div className="services">
        <div>
          <b>Services</b>
          <h1>ARTEVOL8 For a Spectrum of Creativity</h1>
          <p>Where imagination meets innovation, crafting designs that transcend boundaries. We blend artistry with technology to create immersive experiences that inspire.</p>
          <div className="btn">
            <a href="#about" className="about-lmore">
              Learn More
            </a>
          </div>
        </div>
        <div>
          <div className="services-box">
            <div className="sbx2">
              <div className="sq">
                <div>
                  <img src={ui} alt="UI/Ux" width="50px" />
                </div>
                <p>
                  <b>UI/UX Design</b>
                  <p>Crafting intuitive interfaces that captivate and inspire.</p>
                </p>
              </div>
              <div className="sq">
                <img src={games} alt="Games" width="60px" />
                <p>
                  <b>Game Design</b>
                  <p>Creating immersive experiences that captivate and inspire.</p>
                </p>
              </div>
            </div>
            <div className="mb">
              <div className="sbx2">
                <div className="sq">
                  <img src={branding} alt="Branding" width="50px" />
                  <p>
                    <b>Branding</b>
                    <p>Building identities that captivate and inspire.</p>
                  </p>
                </div>
                <div className="sq">
                  <img src={marketing} alt="Marketing" width="40px" />
                  <p>
                    <b>Marketing</b>
                    <p>Strategies that captivate and inspire.</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
