import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Healthy.css";
import { useContext } from "react";
import AppContext from "./AppContext";
import Header from "./Header";
import { data } from "../global.types";

const HealthyCardList = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);
  const { calorie, clickedCardIndex, allUserSelectedFruit } = value;
  const [fruitList, setFruitList] = useState<any[]>([]);
  const [listAvailable, setListAvailable] = useState<boolean>(false);
  let card: any = [];
  const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  useEffect(() => {
    setFruitList(allUserSelectedFruit.current[clickedCardIndex.current]);
    setListAvailable(true);
  }, []);

  const displayClickedList = fruitList.map((fruit, index) => {
    if (listAvailable) {
      return (
        <div key={index} className="fruit-calorie">
          {fruit.name} : {fruit.nutritions.calories} calories
        </div>
      );
    }
  });

  return (
    <>
      <Header />
      <div className="list-display">
        <div className="singleCard">
          <h2>
            You set your calorie to {calorie.current[clickedCardIndex.current]}
          </h2>
          {displayClickedList}
        </div>
      </div>
    </>
  );
};
export default HealthyCardList;
