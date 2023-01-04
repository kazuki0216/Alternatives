import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import Header from "./Header";
import mockdata from "../Mockdata/mockdata";
import "./Editor.css";
import { FruitSchema } from "../Helper/FoodSchema";

type nutrition = {
  calories: number;
  carbohydrates?: number;
  fat?: number;
  protein?: number;
  sugar?: number;
};

type data = {
  genus?: string;
  name: string;
  id?: number;
  family?: string;
  order?: string;
  nutrition: nutrition;
};

const Editor = () => {
  const [setCalorie, isSetCalorie] = useState<boolean>(false);
  const fruitObject = useRef<data[]>([]);
  const clickedFruit = useRef([]);
  const [fetched, setFetched] = useState<boolean>(false);
  const [healthyOption, setHealthyOption] = useState<data[]>([]);
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const selectedFruitname = useRef<nutrition | null>(null);
  const [userTargetCalorie, setUserTargetedCalorie] = useState<number | null>(
    null
  );

  const value = useContext(AppContext);
  const { calorie, clickedCardIndex } = value;

  const navigate = useNavigate();

  useEffect(() => {
    if (!fetched) {
      setHealthyOption(mockdata);
      setFetched(true);
    }
  }, []);

  useEffect(() => {
    console.log("hello");
    if (fruitObject.current[0] === undefined) {
      fruitObject.current.push({
        name: "test",
        nutrition: {
          calories: 0,
          carbohydrates: 0,
          fat: 0,
          protein: 0,
          sugar: 0,
        },
      });
      console.log(fruitObject.current);
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
    const element = event.target as HTMLElement;
    const text = element.innerText;
    setTotalCalories(totalCalories + parseInt(element.innerText.split(" ")[2]));
  };

  const fruitInfo = healthyOption.map(
    (fruit: { name: string; nutrition: nutrition }, index) => {
      return (
        <div
          className="fruit"
          onClick={(e) => {
            settingCalories(e);
          }}
          key={index}
        >
          {fruit.name} : {fruit.nutrition.calories} kcal
        </div>
      );
    }
  );

  const returnHome = () => {
    navigate("/home");
  };
  const setTargetCalorie = () => {
    if (calorie.current[clickedCardIndex.current] === 0) {
      alert("Please insert a target calorie!");
    } else {
      isSetCalorie(true);
      calorie.current[clickedCardIndex.current] = userTargetCalorie;
    }
  };

  return (
    <>
      <Header />
      <h1>Teseting data</h1>
      <button onClick={returnHome}>Return Home</button>
      <h2 className="target-h2">What is your targeted calorie?</h2>

      {!calorie.current[clickedCardIndex.current] ? (
        <>
          <div className="calorie-forms">
            <input
              className="target-cal"
              type="number"
              placeholder="input target calorie"
              onChange={(e) => {
                setUserTargetedCalorie(Number(e.target.value));
              }}
            />

            <button className="target-btn" onClick={setTargetCalorie}>
              set
            </button>
          </div>
        </>
      ) : (
        <h3>{calorie.current[clickedCardIndex.current]} kcal</h3>
      )}
      <div className="outer-grid">
        <div className="healthy-container">{fruitInfo}</div>
      </div>
    </>
  );
};
export default Editor;
