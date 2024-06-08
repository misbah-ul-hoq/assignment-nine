import Banner from "../components/Banner";
import EstateCardContainer from "../components/EstateCardContainer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home | Restate");
  return (
    <main className="home-wrapper space-y-8">
      <div className="container-center my-10">
        <Banner />
      </div>

      <div className="container-center">
        <EstateCardContainer />
      </div>
    </main>
  );
};

export default Home;
