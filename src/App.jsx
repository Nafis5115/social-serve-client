import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import DashboardLayout from "./layout/DashboardLayout";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <HomeLayout></HomeLayout>
    </>
  );
}

export default App;
