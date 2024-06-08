import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const EstateCardContainer = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => setEstates(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <section className="estates-wrapper grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {estates.map((estate) => (
        <EstateCard key={estate.id} estate={estate} />
      ))}
    </section>
  );
};

export default EstateCardContainer;
