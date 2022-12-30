import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import { Card } from "@material-ui/core";
import "./Healthy.css";

const Healthy = () => {
  const targetCal = useRef<number | string>(0);
  const [setCalorie, isSetCalorie] = useState<boolean>(false);
  const navigate = useNavigate();
  const setTargetCalorie = () => {
    if (targetCal.current === 0) {
      alert("Please insert a target calorie!");
    } else {
      isSetCalorie(true);
    }
  };
  const [isClicked, setIsClicked] = useState<Boolean>(true);

  return (
    <div className="Healthy">
      <h2 className="target-h2">What is your targeted calorie?</h2>

      {!setCalorie ? (
        <>
          <div className="calorie-forms">
            <input
              className="target-cal"
              type="number"
              placeholder="input target calorie"
              onChange={(e) => {
                targetCal.current = Number(e.target.value);
              }}
            />
            <button className="target-btn" onClick={setTargetCalorie}>
              set
            </button>
          </div>
        </>
      ) : (
        <h3>{targetCal.current} kcal</h3>
      )}
      <div className="all-cards">
        <Cards />
      </div>
    </div>
  );
};
export default Healthy;
