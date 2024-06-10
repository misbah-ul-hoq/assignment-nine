import { useLoaderData, useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

const EstateDetails = () => {
  // to do something more later
  const data = useLoaderData();
  const propertyId = useParams();
  const currenEstate = data.filter((estate) => estate.id === propertyId);
  useDocumentTitle("Details ");
  console.log(currenEstate);

  return <div>EstateDetails</div>;
};

export default EstateDetails;
