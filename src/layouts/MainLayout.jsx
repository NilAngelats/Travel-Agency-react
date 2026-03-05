import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("/data.json");
        if (!resp.ok) throw new Error("Something went wrong...");
        const data = await resp.json();
        setDestinations(data);
      } catch (err) {
        alert(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-5">
      <Navbar />
      <main>
        <Outlet context={destinations} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
