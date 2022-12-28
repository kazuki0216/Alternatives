import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Card } from "@material-ui/core";
import "./Healthy.css";

const Healthy = () => {
  const [healthyOption, setHealthyOption] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const postObj = useRef([]);
  const clickedFruit = useRef([]);

  return (
    <div className="Healthy">
      <h1>Hello world</h1>
      <Cards />
    </div>
  );
};
export default Healthy;
