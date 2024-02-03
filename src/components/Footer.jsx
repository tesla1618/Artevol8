import React from "react";
import "../styles/footer.css";
import ae8 from "../assets/ae82.png";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <div className="fcontainer">
      <div className="footer">
        <img src={ae8} alt="" className="logo" width="150px" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Support</a>
          </li>
        </ul>
        <div className="left-btn">
          <div className="social-icons">
            <a target="_blank" className="amir-social-link facebook" href="https://facebook.com/amirlabbd">
              <FeatherIcon icon="facebook" />
            </a>
            <a target="_blank" className="amir-social-link twitter" href="https://x.com/amirlabbd">
              <FeatherIcon icon="twitter" />
            </a>
            <a target="_blank" className="amir-social-link linkedin" href="https://www.linkedin.com/company/advanced-machine-intelligence-research-lab-amirl/">
              <FeatherIcon icon="linkedin" />
            </a>
            <a target="_blank" className="amir-social-link github" href="https://github.com/AMIR-Lab-Bangladesh">
              <FeatherIcon icon="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
