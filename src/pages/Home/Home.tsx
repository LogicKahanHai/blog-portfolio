import { HomeComponents } from "../../components/components";

const Home = () => {
  return (
    <div>
      <section id="landing" className="overflow-x-clip odd:bg-gray-100">
        <HomeComponents.LandingComponent />
      </section>
      <section id="about" className="overflow-x-clip">
        <HomeComponents.AboutComponent />
      </section>
    </div>
  );
};

export default Home;
