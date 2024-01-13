import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
function App() {
  return (
    <>
      <TopNavbar />
      <Outlet />
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
}

export default App;
