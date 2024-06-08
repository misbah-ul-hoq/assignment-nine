import Banner from "../components/Banner";
import EstateCardContainer from "../components/EstateCardContainer";
import router from "../routes";

const Home = () => {
  document.title = router.title || "Restate";
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
