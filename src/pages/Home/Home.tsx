import { useEffect } from "react";
import { HomeComponents } from "../../components/components";
import { scroller, Element } from "react-scroll";
import { useLocation } from "react-router-dom";

const Home = () => {

  const navState = useLocation().state;

  useEffect(() => {
    console.log("pathName", navState)
    if (navState) {
      const element = navState.scrollTo
      setTimeout(() => {
        scroller.scrollTo(element, {
          duration: 1500,
          delay: 200,
          smooth: "easeInOut",
          // containerId: "element",
        });
        console.log("scrolling to", element)
      }
        , 1000)
    }
  }, [navState]);




  return (
    <div>
      <Element name="landing">
        <section id="landing" className="overflow-x-clip odd:bg-gray-100">
          <HomeComponents.LandingComponent />
        </section>
      </Element>
      <Element name="about" >
        <section id="about" className="overflow-x-clip">
          <HomeComponents.AboutComponent />
        </section>
      </Element>
    </div>
  );
};

export default Home;
