import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { data } from "../global.types";
import { nutrition } from "../types/global";
import mockdata from "../Mockdata/mockdata";
import "./Editor.css";
import RemoveIcon from "@mui/icons-material/Remove";
import { FoodObject } from "../global.types";

interface props {
  days: string[];
  healthyOption: data[];
  setHealthyOption: (fruitObject: data[]) => void;
}

const EditorCard: React.FC<props> = (props: props) => {
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [userTargetCalorie, setUserTargetedCalorie] = useState<number | null>(
    null
  );
  const value = useContext(AppContext);
  const { calorie, clickedCardIndex, fruitSchemaArray } = value;
  const { days, healthyOption, setHealthyOption } = props;
  const [addedFruit, setAddedFruit] = useState<data[]>([]);
  const fruitObject = useRef<FoodObject | null>(null);
  const [isCalorieBoolean, setCalorieBoolean] = useState<boolean>(false);
  const [fetched, setFetched] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!fetched) {
      setHealthyOption(mockdata);
      setFetched(true);
    }
  }, []);

  useEffect(() => {
    if (fruitSchemaArray.current[clickedCardIndex.current]) {
      setAddedFruit(
        fruitSchemaArray.current[clickedCardIndex.current].current.fruit
      );
      setTotalCalories(
        fruitSchemaArray.current[clickedCardIndex.current].current.totalCalories
      );
      if (
        fruitSchemaArray.current[clickedCardIndex.current].current
          .userSetCalories
      ) {
        calorie.current =
          fruitSchemaArray.current[
            clickedCardIndex.current
          ].current.userSetCalories;
      }
    }
  }, [fruitSchemaArray]);

  useEffect(() => {}, []);

  const settingCalories = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    const element = event.target as HTMLElement;
    const text = element.innerText;
    setTotalCalories(totalCalories + parseInt(element.innerText.split(" ")[2]));
  };

  const patchRequest = async () => {
    fruitObject.current = {
      index: clickedCardIndex.current,
      fruit: addedFruit,
      totalCalories: totalCalories,
      userSetCalorie: calorie,
    };
    const newPostObject: any = [...fruitSchemaArray.current];
    newPostObject[clickedCardIndex.current] = fruitObject;
    fruitSchemaArray.current = newPostObject;
    await axios.patch(
      "http://localhost:4000/post/edit",
      fruitSchemaArray.current
    );
    navigate("/home");
  };

  const setTargetCalorie = () => {
    if (calorie.current[clickedCardIndex.current] === 0) {
      alert("Please insert a target calorie!");
    } else {
      setCalorieBoolean(true);
      calorie.current[clickedCardIndex.current] = userTargetCalorie;
    }
  };

  const removeItem = (index: number) => {
    const currentList = [...addedFruit];
    currentList.splice(index, 1);
    setAddedFruit(currentList);
  };

  const fruitInfo = healthyOption.map(
    (fruit: { name: string; nutritions: nutrition }, index) => {
      return (
        <div
          className="fruit"
          onClick={(e) => {
            setAddedFruit([
              ...addedFruit,
              {
                name: fruit.name,
                nutritions: fruit.nutritions,
              },
            ]);
            settingCalories(e);
            // console.log(addedFruit.current);
          }}
          key={index}
        >
          <ul>
            <li>
              {fruit.name} : {fruit.nutritions.calories} kcal
            </li>
          </ul>
        </div>
      );
    }
  );

  const displayClickedList = addedFruit.map(
    (fruit: { name: string; nutritions: nutrition }, index) => {
      return (
        <div className="editcard-list" key={index}>
          <ul>
            <li>
              {fruit.name} : {fruit.nutritions.calories} kcal
            </li>
          </ul>
          <RemoveIcon
            onClick={(e) => {
              setTotalCalories(totalCalories - fruit.nutritions.calories);
              removeItem(index);
              console.log(addedFruit);
            }}
          />
        </div>
      );
    }
  );

  return (
    <>
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
      <h2>+ Editor Card</h2>
      <div className="editor-card">
        <h2>{totalCalories} calories</h2>
        <h3>{days[clickedCardIndex.current]}</h3>
        <h4>{displayClickedList}</h4>
      </div>
      <button onClick={patchRequest}>Patch Request</button>
    </>
  );
};
export default EditorCard;
