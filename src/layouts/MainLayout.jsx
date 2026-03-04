import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <body className="p-5">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};

export default MainLayout;
