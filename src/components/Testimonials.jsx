import React from "react";
import "../styles/testimonials.css";
import { useState } from "react";
import star from "../assets/star.png";
import avatar from "../assets/avatar.png";

const Testimonials = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cardList = [
    // Your card data here
  ];
  const lastCardIndex = cardList.length - 1;

  const handleNext = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === lastCardIndex ? 0 : prevIndex + 1));
    setTimeout(prependList, 150);
  };

  const handlePrev = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === 0 ? lastCardIndex : prevIndex - 1));
    setTimeout(appendToList, 150);
  };

  const prependList = () => {
    const slicedCard = cardList.splice(lastCardIndex, 1)[0];
    cardList.unshift(slicedCard);
    // Update cardList state if needed
  };

  const appendToList = () => {
    const slicedCard = cardList.splice(0, 1)[0];
    cardList.push(slicedCard);
    // Update cardList state if needed
  };
  return (
    <div>
      <div className="linecut"></div>
      <div className="tcontainer">
        <div className="map"></div>
        <div class="card-container">
          <div className="continer" id="testimonials">
            <div className="text-center">
              <b>Testimonials</b>
              <h1>What people say</h1>
              <img src={avatar} alt="people" className="people" width="300px" />
            </div>
            <div className="card-stack">
              <button className="buttons prev" onClick={handleNext}>
                Next
              </button>
              <ul className="card-list">
                <li className="card " style={{ backgroundColor: "#fff" }}></li>
                <li className="card" style={{ backgroundColor: "#fff" }}></li>
                <li className="card" style={{ backgroundColor: "#fff" }}></li>
                <li className="card" style={{ backgroundColor: "#fff" }}>
                  <div className="quote"></div>
                  <div className="tmt"></div>
                  <font>Artevol8 exceeded all our expectations with their exceptional creativity and attention to detail. Their team seamlessly brought our vision to life, delivering captivating designs that truly resonate with our audience. Working with Artevol8 was a game-changer for our brand, and we can't wait to collaborate with them again.</font>
                  <div className="m-md"></div>
                  <reviewer>John Doe</reviewer>
                  <div className="stars">
                    <img src={star} alt="" width="160px" className="star" />

                    {/* {[...Array(5)].map((_, index) => (
                    ))} */}
                  </div>
                </li>
              </ul>
              <button className="buttons next" onClick={handlePrev}>
                Previous
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
