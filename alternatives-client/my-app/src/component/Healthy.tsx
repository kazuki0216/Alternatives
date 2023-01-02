import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "@material-ui/core";
import "./Healthy.css";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const Healthy = () => {
  const [isClicked, setIsClicked] = useState<Boolean>(true);
  const navigate = useNavigate();

  const editCard = () => {
    console.log("navigate to editor.");
    navigate("/edit");
  };

  return (
    <div className="Healthy">
      <div className="cards">
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={editCard} size="small">
                Edit
              </Button>
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={editCard} size="small">
                Edit
              </Button>
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={editCard} size="small">
                Edit
              </Button>
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={editCard} size="small">
                Edit
              </Button>
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={editCard} size="small">
                Edit
              </Button>
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={editCard} size="small">
                Edit
              </Button>
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={editCard} size="small">
                Edit
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Healthy;
