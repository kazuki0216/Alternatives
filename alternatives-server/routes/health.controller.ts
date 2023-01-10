import selectedFood from "./health.model";
import { Request, Response } from "express";
import axios from "axios";

const getTest = async (req: Request, res: Response) => {
  console.log("hello");
  const uId = req.params.uId;
  try {
    const getResult = await selectedFood.find({
      uId: uId,
    });
    console.log(getResult);
    res.send(getResult).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
};

const postTest = async (req: Request, res: Response) => {
  console.log("hello I'm post");
  console.log(req.body);
  let { uId, fruitSchema, totalCalorie, userTargetedCalorie } = req.body;
  try {
    const newList = new selectedFood({
      uId,
      fruitSchema,
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

const patchFruit = async (req: Request, res: Response) => {
  const uId = req.params.uId;
  const updates = req.body;
  try {
    await selectedFood
      .updateOne(
        {
          uId: uId,
        },
        { $set: updates }
      )
      .then((result) => {
        res.status(200).send(result);
      });
  } catch (err) {
    res.send(err).status(500);
  }
};

module.exports = {
  getTest,
  postTest,
  getFruit,
};
