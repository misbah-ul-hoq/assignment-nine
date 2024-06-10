import Banner from "../components/Banner";
import EstateCardContainer from "../components/EstateCardContainer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "animate.css";
const Home = () => {
  useDocumentTitle("Home | Restate");

  return (
    <main className="home-wrapper space-y-8 py-10">
      <div className="container-center animate__fadeInRight animate__animated">
        <Banner />
      </div>

      <div className="container-center ">
        <EstateCardContainer />
      </div>
    </main>
  );
};

export default Home;
