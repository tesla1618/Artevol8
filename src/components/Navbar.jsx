import React from "react";
import ae8 from "../assets/ae82.png";
import "../styles/navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <img src={ae8} alt="artevol8 logo" className="logo" width="150px" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="left-btn">
        <a href="#contact">
          <button className="contact-btn">Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
