import React, { useState, useEffect } from "react";
// import ButtonAppBar from "./Navbar";
import { getAuth, signOut } from "firebase/auth";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import TemporaryDrawer from "./Navbar";

const Header = () => {
  const auth = getAuth();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <>
      <div className="Title">
        <div>
          <h1>Alternatives</h1>
        </div>
        {/* <button
          className="signout"
          onClick={() => {
            console.log("this ran");
            signOut(auth);
          }}
        >
          Sign Out
        </button> */}
        <TemporaryDrawer />
      </div>
    </>
  );
};
export default Header;
