import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import Header from "./Header";
import Healthy from "./Healthy";
import Unhealthy from "./Unhealthy";
import Navbar from "./Navbar";
import Cards from "./Cards";
import axios from "axios";

function Home() {
  const [authenticated, setauthenticated] = useState<string | null>(null);
  const value = useContext(AppContext);
  const { calorie, clickedCardIndex, setPostObjects, fruitSchemaArray, uId } =
    value;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  useEffect(() => {
    console.log(fruitSchemaArray.current);
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
