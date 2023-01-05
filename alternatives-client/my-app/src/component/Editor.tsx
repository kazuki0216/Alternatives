import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import Header from "./Header";
import mockdata from "../Mockdata/mockdata";
import "./Editor.css";
import { FruitSchema } from "../Helper/FoodSchema";
import EditorCard from "./EditorCard";
import { data } from "../global.types";
import { nutrition } from "../types/global";
type ObjectArray = data[][];

const Editor = () => {
  const fruitObject = useRef<data[]>([]);
  const [allObjects, setAllObjects] = useState<ObjectArray>([]);
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [userTargetCalorie, setUserTargetedCalorie] = useState<number | null>(
    null
  );
  const [healthyOption, setHealthyOption] = useState<data[]>([]);
  const value = useContext(AppContext);
  const { calorie, clickedCardIndex } = value;
  const fruitSchema = new FruitSchema();
  const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    if (fruitObject.current[0] === undefined) {
      fruitObject.current.push(fruitSchema);
      console.log(fruitObject.current[0]);
    }
  }, []);

  // useEffect(() => {
  //   if (fetched === false) {
  //     console.log("I did not run!");
  //     fetchFruit();
  //     setFetched(true);
  //   }
  // });

  // const fetchFruit = async () => {
  //   await axios
  //     .get("http://localhost:4000/fruits")
  //     .then((response) => setHealthyOption(response.data));
  // };

  const settingCalories = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log("Fruit is clicked");
    const element = event.target as HTMLElement;
    const text = element.innerText;
    setTotalCalories(totalCalories + parseInt(element.innerText.split(" ")[2]));
    console.log(totalCalories);
  };

  const returnHome = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />
      <h2>{days[clickedCardIndex.current]}</h2>
      <h2 className="target-h2">What is your targeted calorie?</h2>
      <EditorCard
        days={days}
        healthyOption={healthyOption}
        setHealthyOption={setHealthyOption}
        allObjects={allObjects}
        setAllObjects={setAllObjects}
      />
    </>
  );
};
export default Editor;
