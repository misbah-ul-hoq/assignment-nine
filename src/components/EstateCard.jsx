import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const EstateCard = (props) => {
  const {
    id,
    background_image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = props.estate;
  return (
    <div className="card rounded-lg card-compact max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={background_image} alt={estate_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>{description.slice(0, 10)}</p>
        <div className="card-actions justify-end">
          <Link to={`/property/${id}`} className="btn btn-primary">
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
