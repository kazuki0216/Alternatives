import React, { useState, useEffect } from "react";
import Header from "./Header";
import Healthy from "./Healthy";
import Unhealthy from "./Unhealthy";
import Navbar from "./Navbar";
import Cards from "./Cards";

function Home() {
  const [authenticated, setauthenticated] = useState<string | null>(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="Home">
        <Healthy />
      </div>
    </div>
  );
}

export default Home;
