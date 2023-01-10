import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import Header from "./Header";
import Healthy from "./Healthy";

function Home() {
  const [authenticated, setauthenticated] = useState<string | null>(null);
  const value = useContext(AppContext);

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
