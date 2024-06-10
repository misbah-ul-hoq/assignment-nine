import { Link, useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import data from "../../public/data";

const EstateDetails = () => {
  // to do something more later

  const { propertyId } = useParams();

  const currentEstate = data.filter((es) => es.id.toString() === propertyId)[0];

  const {
    background_image,
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = currentEstate;

  useDocumentTitle(estate_title + " Details");

  return (
    <section className="container-center py-10">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/estates">Estates</Link>
          </li>
          <li>
            <Link to={`/property/${id}`}>{estate_title}</Link>
          </li>
        </ul>
      </div>
      <img
        src={background_image}
        alt={estate_title}
        className="w-full object-cover h-96"
      />
    </section>
  );
};

export default EstateDetails;
