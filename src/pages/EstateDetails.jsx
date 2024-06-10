import { Link, useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import data from "../../public/data";
import { FaLocationDot } from "react-icons/fa6";

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
    <section className="container-center py-10 space-y-4 md:space-y-6 lg:space-y-8">
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
        className="w-[700px] max-w-full rounded-md object-cover h-96"
      />

      <p className="font-bold text-lg flex items-center gap-2">
        <span className="bg-success h-6 w-6 rounded-full"></span>
        {status}
      </p>
      <h3 className="font-semibold text-3xl">{price}</h3>
      <p className="flex items-center gap-3">
        <span className="text-xl">
          <FaLocationDot />
        </span>{" "}
        {location}
      </p>

      <p>Area: {area}</p>

      <div>
        <h2 className="text-xl font-bold">Facilites:</h2>
        <ul className="list-disc ml-6">
          {facilities.map((facility) => (
            <li key={facility}>{facility}</li>
          ))}
        </ul>
      </div>

      <p>{description}</p>
    </section>
  );
};

export default EstateDetails;
