import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="px-5 py-4">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
