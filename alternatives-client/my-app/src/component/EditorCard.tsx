import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { data } from "../global.types";
import { nutrition } from "../types/global";
import mockdata from "../Mockdata/mockdata";
import "./Editor.css";
import { FoodObject } from "../global.types";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

interface props {
  days: string[];
  healthyOption: data[];
  setHealthyOption: (fruitObject: data[]) => void;
}

const EditorCard: React.FC<props> = (props: props) => {
  const value = useContext(AppContext);
  const {
    calorie,
    clickedCardIndex,
    fruitSchemaArray,
    allUserSelectedFruit,
    userTargetCalorie,
    setUserTargetedCalorie,
    calorieCollection,
    uId,
    fetchedObject,
    setFetchedObject,
  } = value;
  const { days, healthyOption, setHealthyOption } = props;
  const [addedFruit, setAddedFruit] = useState<data[]>([]);
  const fruitObject = useRef<FoodObject | null>(null);
  const [totalCalorie, setTotalCalorie] = useState<number>(0);
  const [isCalorieBoolean, setCalorieBoolean] = useState<boolean>(false);
  const [fetched, setFetched] = useState<boolean>(false);
  const [renderedCalorie, setRenderedCalorie] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!fetched) {
      setHealthyOption(mockdata);
      setFetched(true);
    }
  }, []);

  useEffect(() => {
    if (allUserSelectedFruit.current[clickedCardIndex.current]) {
      const selectedFruit =
        allUserSelectedFruit.current[clickedCardIndex.current];
      setAddedFruit(selectedFruit);
      console.log(selectedFruit);
    }
  }, []);

  useEffect(() => {
    if (calorie.current[clickedCardIndex.current]) {
      const targetCalorie = calorie.current[clickedCardIndex.current];
      console.log(targetCalorie);
      setUserTargetedCalorie(targetCalorie);
    }
  }, []);

  useEffect(() => {
    console.log(calorieCollection.current);
    if (calorieCollection.current[clickedCardIndex.current]) {
      const totalCalorie = calorieCollection.current[clickedCardIndex.current];
      console.log(totalCalorie);
      setTotalCalorie(totalCalorie);
    }
  }, []);

  useEffect(() => {
    if (userTargetCalorie !== null) {
      if (userTargetCalorie < totalCalorie) {
        window.alert("You went over the targeted calorie!!!");
      }
    }
  }, [totalCalorie]);

  const settingCalorie = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    const element = event.target as HTMLElement;
    const text = element.innerText;
    setTotalCalorie(totalCalorie + parseInt(element.innerText.split(" ")[2]));
  };

  const patchRequest = async () => {
    calorieCollection.current[clickedCardIndex.current] = totalCalorie;
    allUserSelectedFruit.current[clickedCardIndex.current] = addedFruit;
    fruitObject.current = {
      index: clickedCardIndex.current,
      fruit: addedFruit,
      totalCalorie: totalCalorie,
      userTargetedCalorie: userTargetCalorie,
    };
    fetchedObject.current.fruitSchema[clickedCardIndex.current] =
      fruitObject.current;
    const newPostObj = fetchedObject.current;
    await axios.patch(`http://localhost:4000/post/edit/${uId.current}`, {
      newPostObj,
    });
    navigate("/home");
  };

  const setTargetCalorie = () => {
    setCalorieBoolean(true);
    calorie.current[clickedCardIndex.current] = userTargetCalorie;
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
            settingCalorie(e);
            // console.log(addedFruit.current);
          }}
          key={index}
        >
          <div className="fruit-list">
            <ul>
              <li>
                {fruit.name} : {fruit.nutritions.calories} kcal
              </li>
            </ul>
          </div>
        </div>
      );
    }
  );

  const displayClickedList = addedFruit.map(
    (fruit: { name: string; nutritions: nutrition }, index) => {
      return (
        <div className="editcard-list" key={index}>
          ・{fruit.name} : {fruit.nutritions.calories} kcal
          <RemoveCircleOutlineIcon
            className="remove-btn"
            onClick={(e) => {
              if (totalCalorie - fruit.nutritions.calories < 0) {
                setTotalCalorie(0);
              } else {
                setTotalCalorie(totalCalorie - fruit.nutritions.calories);
              }
              removeItem(index);
            }}
          />
        </div>
      );
    }
  );

  return (
    <>
      <div className="EditorCard">
        {!calorie.current[clickedCardIndex.current] ||
        calorie.current[clickedCardIndex.current] === null ? (
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
          <>
            <h3>{calorie.current[clickedCardIndex.current]} kcal</h3>
            <button
              className="target-btn"
              onClick={() => {
                calorie.current[clickedCardIndex.current] = null;
                setCalorieBoolean(false);
              }}
            >
              Reset
            </button>
          </>
        )}
        <div className="outer-grid">
          <div className="healthy-container">
            <h2>Fruit List</h2>
            {fruitInfo}
          </div>
          <div className="editor-card">
            <div className="card-header">
              <h2>{days[clickedCardIndex.current]}</h2>
              <h2
                style={{
                  color:
                    userTargetCalorie === null ||
                    totalCalorie < userTargetCalorie
                      ? "green"
                      : "red",
                }}
              >
                {totalCalorie} calories
              </h2>
            </div>
            {/* <h3>{days[clickedCardIndex.current]}</h3> */}
            {displayClickedList}
          </div>
        </div>
      </div>
      <button className="save-btn" onClick={patchRequest}>
        Save
      </button>
    </>
  );
};
export default EditorCard;
