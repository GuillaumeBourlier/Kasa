import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Slideshow.scss";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

function Slideshow({ pictures }) {
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
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow__img"
      />
      {pictures.length > 1 && (
        <>
          <button className="slideshow__arrow left" onClick={prevSlide}>
            <img src={arrowLeft} alt="Previous slide" />
          </button>
          <button className="slideshow__arrow right" onClick={nextSlide}>
            <img src={arrowRight} alt="Next slide" />
          </button>
          <div className="slideshow__counter">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
