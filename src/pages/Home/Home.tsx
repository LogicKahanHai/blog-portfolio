import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import { HomeComponents } from "../../components/components";

const Home = () => {
  const [earlyStart, setEarlyStart] = useState(false);
  const [lateStart, setLateStart] = useState(false);

  const navState = useLocation().state;

  useEffect(() => {
    console.log("pathName", navState);
    if (navState && navState.scrollTo) {
      const element = navState.scrollTo;
      console.log("element", element);
      scroller.scrollTo(element, {
        duration: 2000,
        delay: 0,
        smooth: "easeInOutQuint",
        offset: element == "projects" ? -100 : null,
        // containerId: "element",
      });
      setTimeout(() => {
        navState.scrollTo = null;
      }, 2000);
    }
  }, [navState]);

  const postProjectLoad = () => {
    setEarlyStart(true);
    setTimeout(() => {
      setLateStart(true);
    }, 300);
  };

  return (
    <div className="flex min-h-fit w-screen flex-col items-center">
      <Element name="landing">
        <section id="landing" className="overflow-x-clip odd:bg-gray-100">
          <HomeComponents.LandingComponent
            earlyStart={earlyStart}
            lateStart={lateStart}
          />
        </section>
      </Element>
      <Element name="about">
        <section id="about" className="overflow-x-clip">
          <HomeComponents.AboutComponent />
        </section>
      </Element>
      <Element name="projects">
        <section id="projects" className="overflow-x-clip odd:bg-gray-100">
          <HomeComponents.ProjectsComponent postLoading={postProjectLoad} />
        </section>
      </Element>
      <Element name="contact">
        <section id="contact" className="overflow-x-clip ">
          <HomeComponents.ContactComponent />
        </section>
      </Element>
    </div>
  );
};

export default Home;
