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
    <div className="tablet:hidden font-display flex items-center justify-center">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-5xl font-bold">About</h1>
          <p className="text-2xl">About us</p>
        </div>
      </div>
    </div>
  );
};

const WebAboutComponent = () => {
  return (
    <div className="tablet:flex font-display hidden h-screen w-screen items-center justify-center transition-all duration-300">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-5xl font-bold">About</h1>
          <p className="text-2xl">About us</p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
