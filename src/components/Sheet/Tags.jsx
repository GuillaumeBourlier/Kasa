import PropTypes from "prop-types";
import "./Tags.scss";

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <button className="tags__item" key={index}>
          {tag}
        </button>
      ))}
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
