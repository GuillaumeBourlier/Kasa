import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow/Slideshow";
import Sheet from "../components/Sheet/Sheet";
import data from "../data/data.json";
import "./PropertyDetails.scss";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = data.find((p) => p.id === id);

  if (!property) return <Navigate to="/404" />;

  return (
    <div className="main-content property-details">
      <Slideshow pictures={property.pictures} />
      <Sheet
        title={property.title}
        location={property.location}
        name={property.host.name}
        picture={property.host.picture}
        tags={property.tags}
        rating={Number(property.rating)} // Convertir en nombre
        description={property.description}
        equipments={property.equipments}
      />
    </div>
  );
};

export default PropertyDetails;
