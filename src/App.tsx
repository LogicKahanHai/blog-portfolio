import { Outlet, useNavigation } from "react-router-dom";
import { Footer, NavBar } from "./components/components";
import * as PageLoaders from "./pages/PageLoaders";

function App() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    console.log("I am loading");
    return <PageLoaders.HomeLoader />;
  }

  return (
    <>
      <NavBar />
      <div className="overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
