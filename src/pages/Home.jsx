import Banner from "../components/Banner";
import EstateCardContainer from "../components/EstateCardContainer";

const Home = () => {
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
