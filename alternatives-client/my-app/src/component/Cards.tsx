import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import AddIcon from "@mui/icons-material/Add";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card1">
        <Card
          className="added-card"
          style={{
            padding: "20px",
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
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card2">
        <Card
          className="added-card"
          style={{
            padding: "20px",
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
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card3">
        <Card
          className="added-card"
          style={{
            padding: "20px",
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
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card4">
        <Card
          className="added-card"
          style={{
            padding: "20px",
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
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card5">
        <Card
          className="added-card"
          style={{
            padding: "20px",
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
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card6">
        <Card
          className="added-card"
          style={{
            padding: "20px",
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
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card7">
        <Card
          className="added-card"
          style={{
            padding: "20px",
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
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
