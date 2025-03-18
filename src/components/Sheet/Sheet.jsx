import PropTypes from "prop-types";
import Title from "./Title";
import Host from "./Host";
import Tags from "./Tags";
import Collapse from "../Collapse/Collapse";
import "./Sheet.scss";

function Sheet({
  title,
  location,
  name,
  picture,
  tags,
  rating,
  description,
  equipments,
}) {
  return (
    <div className="sheet">
      <div className="sheet__top">
        <div className="sheet__title-tags">
          <Title title={title} location={location} />
          <Tags tags={tags} />
        </div>
        <Host name={name} picture={picture} rating={rating} />
      </div>
      <Collapse key="Description" label="Description" content={description} />
      <Collapse
        key="Équipements"
        label="Équipements"
        contentList={equipments}
      />
    </div>
  );
}

Sheet.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
  equipments: PropTypes.array,
  tags: PropTypes.array,
  rating: PropTypes.number.isRequired, // Assurez-vous que rating est requis et de type number
};

export default Sheet;
