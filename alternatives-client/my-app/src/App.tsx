import React, {useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
// import SignUp from "./component/SignUp";
import "./App.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./auth/firebase";
import AuthRoute from "./component/AuthRoute";

initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
