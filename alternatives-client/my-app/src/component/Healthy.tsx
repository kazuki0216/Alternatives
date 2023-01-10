import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "@material-ui/core";
import "./Healthy.css";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { useContext } from "react";
import AppContext from "./AppContext";
import EditIcon from "@mui/icons-material/Edit";
import { data } from "../global.types";
import { create } from "@material-ui/core/styles/createTransitions";

type fetchedObject = {
  fruitSchema: data[];
  uId: string;
  _id?: string;
};

const Healthy = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);
  const {
    calorie,
    clickedCardIndex,
    uId,
    allUserSelectedFruit,
    calorieCollection,
    mounted,
    setMounted,
    fetchedObject,
  } = value;
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
    console.log(calorieCollection.current);
    if (mounted === false) {
      getUsersCard();
    }
  }, [mounted]);

  const getUsersCard = async () => {
    await axios
      .get(`http://localhost:4000/home/${uId.current}`)
      .then((response) => {
        const object = response.data[0];
        const fruitArray = response.data[0].fruitSchema;
        fetchedObject.current = object;
        for (let i = 0; i < fruitArray.length; i++) {
          allUserSelectedFruit.current.push(fruitArray[i].fruit);
          calorie.current.push(fruitArray[i].userTargetedCalorie);
          calorieCollection.current.push(fruitArray[i].totalCalorie);
        }
      });
    setMounted(true);
    console.log(fetchedObject.current);
  };

  const editCard = () => {
    navigate("/edit");
  };
  for (let i = 0; i < 7; i++) {
    card.push(
      <Card
        key={i}
        // ref={calorie.current[i]}
        className="added-card"
        style={{
          padding: "10px",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: "16px" }}
            color="textSecondary"
            gutterBottom
          >
            {days[i]}
          </Typography>
        </CardContent>
        {calorie.current[i] ? (
          <>
            <h4>Target Calorie</h4>
            <h5>{calorie.current[i]} kcal</h5>
          </>
        ) : (
          <p>set your goal!</p>
        )}
        <CardActions className="editpencil">
          <EditIcon
            className="editIcon"
            onClick={() => {
              clickedCardIndex.current = i;
              editCard();
            }}
            style={{ fontSize: "16px" }}
          >
            Edit
          </EditIcon>
        </CardActions>
      </Card>
    );
  }

  return (
    <div className="Healthy">
      <h2>Your List</h2>
      <div className="cards">{card}</div>
    </div>
  );
};
export default Healthy;
