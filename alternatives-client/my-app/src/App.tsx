import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
// import SignUp from "./component/SignUp";
import "./App.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./auth/firebase";
import AuthRoute from "./component/AuthRoute";
import Editor from "./component/Editor";

initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/edit" element={<Editor />} />
          <Route
            path="/home"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
