import Banner from "../components/Banner";
import EstateCardContainer from "../components/EstateCardContainer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home | Restate");
  return (
    <main className="home-wrapper space-y-8 py-10">
      <div className="container-center ">
        <Banner />
      </div>

      <div className="container-center">
        <EstateCardContainer />
      </div>
    </main>
  );
};

export default Home;
