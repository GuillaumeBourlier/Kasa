import React from "react";
import "./Banner.scss";
import defaultBackground from "../../assets/images/banner.jpg";

function Banner({ picture = defaultBackground, title }) {
  return (
    <div className="banner">
      <img
        src={picture}
        alt="Banner"
        className={`banner__img ${title ? "banner__img__title" : ""}`}
      />
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}

export default Banner;
