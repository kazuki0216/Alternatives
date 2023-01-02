import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "./Header";

type nutrition = {
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  sugar: number;
};

const Editor = () => {
  const [setCalorie, isSetCalorie] = useState<boolean>(false);
  const targetCal = useRef<number | string>(0);
  const postObj = useRef([]);
  const clickedFruit = useRef([]);
  const [fetched, setFetched] = useState<boolean>(false);
  const [healthyOption, setHealthyOption] = useState<[]>([]);
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const fruitname = useRef<nutrition[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (fetched === false) {
      console.log("I did not run!");
      fetchFruit();
      setFetched(true);
    }
  });

  const fetchFruit = async () => {
    await axios
      .get("http://localhost:4000/fruits")
      .then((response) => setHealthyOption(response.data));
  };

  const settingCalories = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    const element = event.target as HTMLElement;
    const text = element.innerText;
    setTotalCalories(totalCalories + parseInt(element.innerText.split(" ")[2]));
  };

  const fruitInfo = healthyOption.map(
    (fruit: { name: string; nutritions: nutrition }, index) => {
      return (
        <div
          className="fruit"
          onClick={(e) => {
            settingCalories(e);
          }}
          key={index}
        >
          {fruit.name} : {fruit.nutritions.calories} kcal
        </div>
      );
    }
  );

  const returnHome = () => {
    navigate("/home");
  };
  const setTargetCalorie = () => {
    if (targetCal.current === 0) {
      alert("Please insert a target calorie!");
    } else {
      isSetCalorie(true);
    }
  };

  return (
    <>
      <Header />
      <button onClick={returnHome}>Return Home</button>
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
      <div className="outer-grid">
        <div className="healthy-container">{fruitInfo}</div>
      </div>
    </>
  );
};
export default Editor;
