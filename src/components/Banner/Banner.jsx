import React from "react";
import "./Banner.scss";
import bannerImage from "../../assets/images/banner.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner__img" />
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
