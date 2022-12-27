import React from "react";
import { getAuth, signOut } from "firebase/auth";

function Home() {
  const auth = getAuth();

  return (
    <div>
      <p>Home Page</p>
      <button onClick={() => signOut(auth)}>Sign Out from firebase</button>
    </div>
  );
}

export default Home;
