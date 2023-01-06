import React, { createContext, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
// import SignUp from "./component/SignUp";
import "./App.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./auth/firebase";
import AuthRoute from "./component/AuthRoute";
import Editor from "./component/Editor";
import AppContext from "./component/AppContext";
import { click } from "@testing-library/user-event/dist/click";
import data from "./types/global";

initializeApp(firebaseConfig);

function App() {
  const calorie = useRef<number[]>([]);
  const clickedCardIndex = useRef<number | null>(null);
  const fruitSchemaArray = useRef<any[]>([]);
  return (
    <AppContext.Provider
      value={{
        calorie: calorie,
        clickedCardIndex: clickedCardIndex,
        fruitSchemaArray: fruitSchemaArray,
      }}
    >
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
    </AppContext.Provider>
  );
}

export default App;
