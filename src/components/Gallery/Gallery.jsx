import React, { useState, useEffect } from "react";
import Thumb from "../Thumb/Thumb";
import data from "../../data/data.json";
import "./Gallery.scss";

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    setGalleryData(data);
  }, []);

  return (
    <ul className="gallery">
      {galleryData.map((item) => (
        <Thumb
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </ul>
  );
}

export default Gallery;
