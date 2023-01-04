import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import AppContext from "./AppContext";

export default function Cards() {
  const value = useContext(AppContext);
  const { calorie } = value;
  return (
    <div className="cards">
      <p>{calorie.current}</p>
      <div className="card1">
        <Card
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
              Monday
              <p>{calorie.current}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card2">
        <Card
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
              Tuesday
              <p>{calorie.current}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card3">
        <Card
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
              Wednesday
              <p>{calorie.current}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card4">
        <Card
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
              Thursday
              <p>{calorie.current}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card5">
        <Card
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
              Friday
              <p>{calorie.current}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card6">
        <Card
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
              Saturday
              <p>{calorie.current}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card7">
        <Card
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
              Sunday
              <p>{calorie.current}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
