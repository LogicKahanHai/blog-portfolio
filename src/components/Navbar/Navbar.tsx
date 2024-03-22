import React, { useEffect, useState } from "react";
import { Link as PageLink } from "react-router-dom";
import { Link as HomeScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar(): React.ReactElement {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isHome, setIsHome] = useState(false);

  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathName]);

  return (
    <>
      {/* bigPhone */}
      <header className="tablet:hidden phone:flex font-display sticky left-0 right-0 top-0 z-50">
        <div className="flex h-16 w-full items-center justify-between bg-white px-5 shadow-md">
          <div className="cursor-pointer text-xl font-bold text-gray-800">
            {!isHome && <PageLink to="/">Logic Kahan Hai?</PageLink>}
            {isHome && (
              <HomeScrollLink
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={scrollToTop}
              >
                Logic Kahan Hai?
              </HomeScrollLink>
            )}
          </div>
          {/* <svg className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
        </div>
      </header>

      {/* desktop */}
      <header className="tablet:flex font-display sticky left-0 right-0 top-0 z-50 hidden">
        <div className="flex w-full items-center justify-between bg-white px-20 py-8 shadow-md">
          {/* <div className="flex items-center gap-5"> */}
          {!isHome && (
            <PageLink to="/">
              <div className="cursor-pointer text-2xl font-bold text-gray-800">
                Logic Kahan Hai?
              </div>
            </PageLink>
          )}
          {isHome && (
            <HomeScrollLink
              to="root"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <div className="cursor-pointer text-2xl font-bold text-gray-800">
                Logic Kahan Hai?
              </div>
            </HomeScrollLink>
          )}
          <div className="flex items-center gap-5">
            {/* Home LI */}

            <div className="cursor-pointer text-lg font-bold  text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600">
              {isHome ? (
                <HomeScrollLink
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={700}
                  onClick={scrollToTop}
                >
                  Home
                </HomeScrollLink>
              ) : (
                <PageLink to="/">Home</PageLink>
              )}
            </div>

            {/* About LI */}

            <div className="cursor-pointer text-lg font-bold  text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600">
              {isHome ? (
                <HomeScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  About
                </HomeScrollLink>
              ) : (
                <PageLink to="/#about">About</PageLink>
              )}
            </div>

            {/* Projects LI */}

            <div className="cursor-pointer text-lg font-bold  text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600">
              {isHome ? (
                <HomeScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={700}
                >
                  Projects
                </HomeScrollLink>
              ) : (
                <PageLink to="/#projects">Projects</PageLink>
              )}
            </div>

            {/* Blogs LI */}

            <div className="cursor-pointer text-lg font-bold  text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600">
              {isHome ? (
                <HomeScrollLink
                  to="blogs"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={700}
                >
                  Blogs
                </HomeScrollLink>
              ) : (
                <PageLink to="/#blogs">Blogs</PageLink>
              )}
            </div>

            {/* Contact LI */}

            <div className="cursor-pointer text-lg font-bold  text-gray-600 transition-all duration-300 ease-in-out hover:text-indigo-600">
              {isHome ? (
                <HomeScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={700}
                >
                  Contact
                </HomeScrollLink>
              ) : (
                <PageLink to="/#contact">Contact</PageLink>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
