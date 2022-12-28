import React from "react";
import Header from "./Header";
import Healthy from "./Healthy";
import Unhealthy from "./Unhealthy";
import Navbar from "./Navbar";
import Cards from "./Cards";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="Home">
        <Healthy />
      </div>
    </div>
  );
}

export default Home;
