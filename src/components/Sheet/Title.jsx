import PropTypes from "prop-types";
import "./Title.scss";

function Title({ title, location }) {
  return (
    <div className="title">
      <h1 className="title__main">{title}</h1>
      <p className="title__subtitle">{location}</p>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Title;
