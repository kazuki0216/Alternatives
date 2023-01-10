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
  } = value;
  const { days, healthyOption, setHealthyOption } = props;
  const [addedFruit, setAddedFruit] = useState<data[]>([]);
  const fruitObject = useRef<FoodObject | null>(null);
  const [totalCalorie, setTotalCalorie] = useState<number>(0);
  const [isCalorieBoolean, setCalorieBoolean] = useState<boolean>(false);
  const [fetched, setFetched] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(totalCalorie);
    if (!fetched) {
      setHealthyOption(mockdata);
      setFetched(true);
    }
  }, []);

  // useEffect(() => {
  //   if (allUserSelectedFruit[clickedCardIndex.current]) {
  //     setAddedFruit(allUserSelectedFruit[clickedCardIndex.current]);
  //   }
  //   console.log(addedFruit);
  // }, []);

  useEffect(() => {
    if (allUserSelectedFruit.current[clickedCardIndex.current]) {
      setAddedFruit(allUserSelectedFruit.current[clickedCardIndex.current]);
    }
  }, []);

  useEffect(() => {
    if (calorie.current[clickedCardIndex.current]) {
      setUserTargetedCalorie(calorie.current[clickedCardIndex.current]);
    }
  }, []);

  useEffect(() => {
    // console.log(calorieCollection.current[clickedCardIndex.current]);
    if (calorieCollection.current[clickedCardIndex.current]) {
      setTotalCalorie(calorieCollection.current[clickedCardIndex.current]);
    }
  }, []);

  useEffect(() => {
    // console.log("total fruits:", totalCalorie);

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
    fruitObject.current = {
      index: clickedCardIndex.current,
      fruit: addedFruit,
      totalCalorie: totalCalorie,
      userTargetedCalorie: calorie,
    };
    const newPostObject: any = [...fruitSchemaArray.current];
    newPostObject[clickedCardIndex.current] = fruitObject;
    fruitSchemaArray.current = newPostObject;
    console.log(fruitSchemaArray.current);
    // await axios.patch(
    //   `http://localhost:4000/post/edit/${uId}`,
    //   fruitSchemaArray.current
    // );
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
            allUserSelectedFruit.current[clickedCardIndex.current].push({
              name: fruit.name,
              nutritions: fruit.nutritions,
            });
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
              setTotalCalorie(totalCalorie - fruit.nutritions.calories);
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
        <button
          className="reset-btn"
          onClick={() => {
            setCalorieBoolean(false);
            calorie.current[clickedCardIndex.current] = null;
          }}
        >
          Reset
        </button>
        <div className="outer-grid">
          <div className="healthy-container">
            <h2>Fruit List</h2>
            {fruitInfo}
          </div>
          <div className="editor-card">
            <div className="card-header">
              <h2>Wednesday</h2>
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
      <button onClick={patchRequest}>Save</button>
    </>
  );
};
export default EditorCard;
