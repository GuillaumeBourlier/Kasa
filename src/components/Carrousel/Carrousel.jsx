import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Carrousel.scss";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carrousel__img"
      />
      <button className="carrousel__arrow left" onClick={prevSlide}>
        <img src={arrowLeft} alt="Previous slide" />
      </button>
      <button className="carrousel__arrow right" onClick={nextSlide}>
        <img src={arrowRight} alt="Next slide" />
      </button>
      <div className="carrousel__counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
