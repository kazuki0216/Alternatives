import selectedFood from "./health.model";
import { Request, Response } from "express";
import axios from "axios";

const getTest = async (req: Request, res: Response) => {
  const getResult = await selectedFood.find();
  res.send({ data: getResult });
};

module.exports = {
  getTest,
};

const postTest = async (req: Request, res: Response) => {
  let { healthFood, totalCalories } = req.body;
  try {
    const newList = new selectedFood({
      healthFood,
      totalCalories,
    });
    const save = await newList.save();
    res.status(201).send(save);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getFruit = async (req: Request, res: Response) => {
  try {
    const result = await axios
      .get("https://fruityvice.com/api/fruit/all")
      .then((response) => response.data);

    res.send(result).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};

module.exports = {
  getTest,
  postTest,
  getFruit,
};
