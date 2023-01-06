import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import Header from "./Header";
import Healthy from "./Healthy";
import Unhealthy from "./Unhealthy";
import Navbar from "./Navbar";
import Cards from "./Cards";

function Home() {
  const [authenticated, setauthenticated] = useState<string | null>(null);
  const value = useContext(AppContext);
  const { calorie, clickedCardIndex, setPostObjects, fruitSchemaArray } = value;
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  let obj = [{ current: 0 }];
  useEffect(() => {
    if (fruitSchemaArray.current[clickedCardIndex.current]) {
      console.log("this is the .current");
      console.log(
        "fruit",
        fruitSchemaArray.current[clickedCardIndex.current].current
      );
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
