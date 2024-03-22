import React, { useState } from "react";
import { Socials } from "../../Common";
import "./LandingPage.css";

const LandingComponent: React.FC = () => {
  return (
    <>
      {/* phone */}
      <PhoneLanding />

      {/* Desktop */}
      <WebLanding />
    </>
  );
};

const WebLanding: React.FC = () => {
  const [webLoading, setWebLoading] = useState(true);
  const [appLoading, setAppLoading] = useState(true);
  const [webOpacity, setWebOpacity] = useState(false);
  const [appOpacity, setAppOpacity] = useState(false);

  const imageLoaded = (
    callback: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    console.log("Image Loaded");
    callback(false);
  };

  function toggleOpacity(
    opacity: boolean,
    callback: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    if (opacity) {
      callback(false);
    } else {
      callback(true);
    }
  }
  return (
    <div className="tablet:flex font-display hidden h-screen w-screen items-start justify-center transition-all duration-300">
      <div className="flex h-full w-full items-start justify-center">
        <div className="desktop:w-[75%] desktop:h-[60%] tablet:w-[90%] tablet:h-[60%] tablet:ml-20 mt-20 flex min-h-fit flex-col justify-between">
          <div className="mb-10 flex flex-row items-start">
            <div className="flex flex-1 flex-col py-10">
              <div>
                <h1 className="font-display mb-10 text-4xl font-bold">
                  Full Stack Web and App Developer 🧑‍💻
                </h1>
              </div>
              <div>
                <p className="mb-7 font-sans text-lg text-gray-500">
                  Hi, I'm Rishi Bhalla (better known as Logic). A passionate
                  Full Stack Web and App Developer based in Punjab, India. 📍
                </p>
              </div>
              <div className="mb-20">
                <Socials />
              </div>
              <div className="flex w-full flex-col justify-start gap-5">
                <div className="mb-5 flex w-full flex-row items-center gap-8 divide-x-4 divide-gray-600">
                  <p className="font-display text-nowrap text-lg font-semibold text-gray-600">
                    Web Stack
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-nowrap gap-10 px-10">
                      <div
                        className={`h-10 w-52 animate-pulse rounded-lg bg-gray-300 ${webLoading ? "flex" : "hidden"}`}
                      ></div>
                      <div
                        className={`group relative flex cursor-pointer items-center border-gray-400 text-center ${webLoading ? "hidden" : "flex"}`}
                      >
                        <img
                          src="https://skillicons.dev/icons?i=mongo,express,react,nodejs"
                          onMouseOver={() =>
                            toggleOpacity(webOpacity, setWebOpacity)
                          }
                          onMouseLeave={() =>
                            toggleOpacity(webOpacity, setWebOpacity)
                          }
                          onLoad={() => {
                            imageLoaded(setWebLoading);
                          }}
                        />
                        <div
                          id="webStackTooltip"
                          className={`${webOpacity ? "opacity-100" : "opacity-0"} pointer-events-none absolute bottom-full z-10 mb-3 flex w-fit flex-col items-center rounded-lg bg-gray-800 px-3 py-2 text-center text-xs text-white transition-all duration-300 ease-in-out`}
                        >
                          MongoDB, Express, React, Node.js
                          <div className="-mb-3 h-3 w-3 rotate-45 bg-gray-800"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-row items-center gap-8 divide-x-4 divide-gray-600">
                  <p className="font-display text-nowrap text-lg font-semibold text-gray-600">
                    App Stack
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="flex flex-nowrap gap-10 px-10">
                      <div
                        className={`h-10 w-52 animate-pulse rounded-lg bg-gray-300 ${appLoading ? "flex" : "hidden"}`}
                      ></div>
                      <div
                        className={`group relative flex cursor-pointer items-center border-gray-400 text-center ${appLoading ? "hidden" : "flex"}`}
                      >
                        <img
                          src="https://skillicons.dev/icons?i=kotlin,java,flutter,react"
                          onMouseOver={() =>
                            toggleOpacity(appOpacity, setAppOpacity)
                          }
                          onMouseLeave={() =>
                            toggleOpacity(appOpacity, setAppOpacity)
                          }
                          onLoad={() => {
                            imageLoaded(setAppLoading);
                          }}
                        />
                        <div
                          id="appStackTooltip"
                          className={`${appOpacity ? "opacity-100" : "opacity-0"} pointer-events-none absolute top-full z-10 mt-3 flex w-fit flex-col items-center rounded-lg bg-gray-800 px-3 py-2 text-center text-xs text-white transition-all duration-300 ease-in-out`}
                        >
                          <div className="-mt-3 h-3 w-3 rotate-45 bg-gray-800"></div>
                          Kotlin, Java, Flutter, React Native
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-1 items-center justify-center">
              <div className="hero-img h-[75%] w-[60%] object-fill">
                {/* <img src="/public/rishi.jpg" alt="Hero" className="h-3/4 w-3/4 object-fill rounded-full hero-img" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhoneLanding: React.FC = () => {
  const [webLoading, setWebLoading] = useState(true);
  const [appLoading, setAppLoading] = useState(true);
  const [webOpacity, setWebOpacity] = useState(false);
  const [appOpacity, setAppOpacity] = useState(false);

  function toggleWeb() {
    setWebOpacity(!webOpacity);
  }

  function toggleApp() {
    setAppOpacity(!appOpacity);
  }

  const imageLoaded = (
    callback: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    console.log("Image Loaded");
    callback(false);
  };

  return (
    <div className="tablet:hidden font-display flex flex-col">
      <div className="h-fit pt-10 odd:bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <div className="bigPhone:max-w-[22rem] bigPhone:min-h-[22rem] hero-img mb-10 h-[60%] min-h-[15rem] w-[75%] max-w-[15rem] object-fill">
            {/* <img src="/public/rishi.jpg" alt="Hero" className="h-3/4 w-3/4 object-fill rounded-full hero-img" /> */}
          </div>
          <div className=" bigPhone:px-20 bigPhone:mb-10 mb-5 px-10">
            <div>
              <h1 className="bigPhone:text-4xl mb-10 text-center font-sans text-3xl font-bold">
                Full Stack Web and App Developer 🧑‍💻
              </h1>
            </div>
            <div>
              <p className="text-md bigPhone:text-lg bigPhone:px-20 mb-7 px-5 text-center font-sans text-gray-500">
                Hi, I'm RIshi Bhalla <br /> &lt; aka LogicKahanHai &gt; <br /> A
                passionate Full Stack Web and App Developer based in Punjab,
                India. 📍
              </p>
            </div>
          </div>
          <div className="mb-20">
            <Socials />
          </div>
          <div className="mb-5 flex w-full flex-col items-center gap-2 divide-y-2 divide-gray-600">
            <p className="text-nowrap font-sans text-lg font-semibold text-gray-600">
              Web Stack
            </p>

            <div className="flex flex-col items-center">
              <div className="flex py-8">
                <div
                  className={`h-10 w-52 animate-pulse rounded-lg bg-gray-300 ${webLoading ? "flex" : "hidden"}`}
                ></div>
                <div
                  className={`group relative flex cursor-pointer items-center border-gray-400 text-center ${webLoading ? "hidden" : "flex"}`}
                >
                  <img
                    src="https://skillicons.dev/icons?i=mongo,express,react,nodejs"
                    onClick={() => {
                      console.log("I am from web stack");
                      toggleWeb();
                    }}
                    onLoad={() => {
                      imageLoaded(setWebLoading);
                    }}
                  />
                  <div
                    id="webStackTooltip"
                    className={`${webOpacity ? "opacity-100" : "opacity-0"} pointer-events-none absolute top-full z-10 mt-3 flex w-fit flex-col items-center rounded-lg bg-gray-800 px-3 py-2 text-center text-xs text-white transition-all duration-300 ease-in-out`}
                  >
                    <div className="-mt-3 h-3 w-3 rotate-45 bg-gray-800"></div>
                    MongoDB, Express, React, Node.js
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-2 divide-y-2 divide-gray-600">
            <p className="text-nowrap font-sans text-lg font-semibold text-gray-600">
              App Stack
            </p>

            <div className="flex flex-col items-center">
              <div className="flex py-8">
                <div
                  className={`h-10 w-52 animate-pulse rounded-lg bg-gray-300 ${appLoading ? "flex" : "hidden"}`}
                ></div>
                <div
                  className={`group relative mb-8 flex cursor-pointer items-center border-gray-400 text-center ${appLoading ? "hidden" : "flex"}`}
                >
                  <img
                    src="https://skillicons.dev/icons?i=kotlin,java,flutter,react"
                    onClick={() => {
                      console.log("I am from app stack");
                      toggleApp();
                    }}
                    onLoad={() => {
                      imageLoaded(setAppLoading);
                    }}
                  />
                  <div
                    id="appStackTooltip"
                    className={`${appOpacity ? "opacity-100" : "opacity-0"} pointer-events-none absolute top-full z-10 mt-3 flex w-fit flex-col items-center rounded-lg bg-gray-800 px-3 py-2 text-center text-xs text-white transition-all duration-300 ease-in-out`}
                  >
                    <div className="-mt-3 h-3 w-3 rotate-45 bg-gray-800"></div>
                    Kotlin, Java, Flutter, React Native
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
