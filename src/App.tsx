import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img src="/cat.gif" alt="cat.gif" height="320" width="320" />

        <h3 className="mt-10 text-3xl font-bold">
          Logic is working on the website{" "}
          <span className="underline">day and night!</span>
        </h3>
        <p className="mt-5 text-xl">
          The website is now in the testing phase and will be made live soon.
          <br />
          Sorry for the inconvenience.
        </p>
        <h3 className="mt-10 text-4xl font-bold">
          Please visit again on{" "}
          <span className="underline">25th March, 2024</span> for a finished
          product.
        </h3>
      </div>
    </>
  );
}

export default App;
