import PropTypes from "prop-types";
import Rating from "./Rating";
import "./Host.scss";

function Host({ name, picture, rating }) {
  return (
    <div className="host">
      <div className="host__info">
        <h2 className="host__name">{name}</h2>
        <Rating stars={rating} />
      </div>
      <img className="host__img" src={picture} alt={name} />
    </div>
  );
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired, // Assurez-vous que rating est requis et de type number
};

export default Host;
