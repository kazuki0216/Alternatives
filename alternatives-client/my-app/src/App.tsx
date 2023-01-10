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
import { data } from "./global.types";
import axios from "axios";

initializeApp(firebaseConfig);

type fetchedObject = {
  fruitSchema: data[];
  uId: string;
  _id?: string;
};

function App() {
  const uId = useRef<number | string>("");
  const calorie = useRef<number[]>([]);
  const clickedCardIndex = useRef<number | null>(null);
  const fruitSchemaArray = useRef<data[]>([]);
  const [addedFruit, setAddedFruit] = useState<data[]>([]);
  const calorieCollection = useRef<number[]>([]);
  const allUserSelectedFruit = useRef<data[][]>([]);
  const [mounted, setMounted] = useState<boolean>(false);
  const [userTargetCalorie, setUserTargetedCalorie] = useState<number | null>(
    null
  );
  const fetchedObject = useRef<fetchedObject | {}>({});

  const getUserFruit = async () => {
    await axios
      .get("http://localhost:4000/user/fruit")
      .then((response) => (fruitSchemaArray.current = response.data));
  };
  return (
    <AppContext.Provider
      value={{
        calorie: calorie,
        clickedCardIndex: clickedCardIndex,
        fruitSchemaArray: fruitSchemaArray,
        uId: uId,
        addedFruit: addedFruit,
        setAddedFruit: setAddedFruit,
        allUserSelectedFruit: allUserSelectedFruit,
        userTargetCalorie: userTargetCalorie,
        setUserTargetedCalorie: setUserTargetedCalorie,
        calorieCollection: calorieCollection,
        mounted: mounted,
        setMounted,
        fetchedObject: fetchedObject,
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
