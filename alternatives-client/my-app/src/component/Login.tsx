import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export interface ILoginPageProps {}

const Login = (props: any) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const value = useContext(AppContext);
  const { uId } = value;

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        uId.current = response.user.uid;
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <div className="Landing">
      <div className="login-title">
        <h1>Alternatives</h1>
        <h2>What can you eat as an alternative?</h2>
      </div>
      <button
        className="sign-in"
        onClick={() => signInWithGoogle()}
        disabled={authing}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
