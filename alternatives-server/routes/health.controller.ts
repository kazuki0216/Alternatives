import selectedFood from "./health.model";
import { Request, Response } from "express";

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

module.exports = {
  getTest,
  postTest,
};
