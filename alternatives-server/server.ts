import express, { Express, Request, Response } from "express";
import selectedFood from "./routes/health.model";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
const {
  getTest,
  postRequest,
  getFruit,
  patchFruit,
} = require("./routes/health.controller");

dotenv.config();

function setupServer() {
  const app: Express = express();

  //middleware
  app.use(express.json());
  app.use(cors());
  app.get("/fruits", getFruit);
  app.get("/home/:uId", getTest);
  app.post("/post", postRequest);
  app.patch("/post/edit/:uId", patchFruit);

  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://localhost:27017/alternatives");
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB has connected");
  });

  return app;
}

export default setupServer;
