import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import Header from "./Header";
import Healthy from "./Healthy";
import axios from "axios";

function Home() {
  const [authenticated, setauthenticated] = useState<string | null>(null);
  const value = useContext(AppContext);
  const { uId } = value;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  //an object for if a user does not have a existing card.

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
