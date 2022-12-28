import { useState, useEffect } from "react";
// import ButtonAppBar from "./Navbar";
import { getAuth, signOut } from "firebase/auth";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

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
        <h1>Alternatives</h1>
        {/* <button
          className="signout"
          onClick={() => {
            console.log("this ran");
            signOut(auth);
          }}
        >
          Sign Out
        </button> */}
        <nav className="navBar">
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <ul className="showMenu">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/mylist">My List</a>
                </li>
                <li>
                  <a href="/search">Search</a>
                </li>
              </ul>
            ) : (
              <FiMenu
                style={{ color: "#7b7b7b", width: "60px", height: "60px" }}
              />
            )}
          </button>
        </nav>
      </div>
    </>
  );
};
export default Header;
