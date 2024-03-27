import './AboutComponent.css';

const AboutComponent = () => {
  return (
    <>
      {/* Phone */}
      <PhoneAboutComponent />

      {/* Web */}
      <WebAboutComponent />
    </>
  );
};

const PhoneAboutComponent = () => {
  return (
    <div className="tablet:hidden w-screen h-fit font-display flex items-center justify-center">
      <div className="flex h-fit w-full items-center justify-center px-10 py-20">
        <div className="flex flex-col w-full items-center justify-center">
          {/* Image */}
          <div className="bigPhone:max-w-[16rem] bigPhone:min-h-[16rem] about-img mb-10 h-[60%] min-h-[15rem] w-[75%] max-w-[15rem] object-fill">
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 w-full mt-5 items-center">
            <h1 className="text-3xl font-bold text-indigo-600">Whoami</h1>
            <div className=" bigPhone:mb-10 mb-5">
              <div>
                <h1 className="bigPhone:text-3xl mb-10 text-center font-display text-2xl font-bold">
                  Full Stack Web and App Developer <br /> based in Punjab,
                  India. 📍
                </h1>
              </div>
              <div>
                <p className="text-md bigPhone:text-lg bigPhone:px-10 mb-7 text-center font-sans text-gray-500">
                  Hi, my name is Rishi Bhalla, I love to build solutions for problems that I face in my daily life. I have been working in the field of Web Development for 5+ years and in App Development for 2+ years. I have worked on various projects ranging from simple static websites to complex web applications.<br /> <br /> Here you can find my latest projects and blogs. I am always open to new opportunities and challenges. Feel free to reach out to me for any queries or collaborations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const WebAboutComponent = () => {
  return (
    <div className="tablet:flex font-display hidden h-screen w-screen items-start justify-center transition-all duration-300">
      <div className="flex h-full w-full items-center justify-center">
        <div className="desktop:min-w-[78%] desktop:min-h-[60%] laptop:min-w-[75%] laptop:ml-0 tablet:w-[90%] tablet:h-[60%] tablet:ml-20  flex min-h-fit flex-col justify-center items-center">
          <div className=" flex flex-row items-start w-[90%]">
            <div className="flex h-full min-w-[40%] items-center justify-center">
              <div className="about-img laptop:max-desktop:w-[75%] h-[75%] w-[60%] object-fill">
              </div>
            </div>
            <div className="flex w-full flex-col py-10 gap-5">
              <div>
                <h1 className="text-3xl text-center font-bold text-indigo-600">About Me</h1>
              </div>
              <div>
                <h1 className="font-display text-center text-3xl font-bold">
                  Full Stack Web and App Developer <br /> based in Punjab,
                  India. 📍
                </h1>
              </div>
              <div>
                <p className="font-sans text-center text-lg text-gray-500">
                  Hi, my name is Rishi Bhalla, I love to build solutions for problems that I face in my daily life. I have been working in the field of Web Development for 5+ years and in App Development for 2+ years. I have worked on various projects ranging from simple static websites to complex web applications. Here you can find my latest projects and blogs. I am always open to new opportunities and challenges. Feel free to reach out to me for any queries or collaborations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
