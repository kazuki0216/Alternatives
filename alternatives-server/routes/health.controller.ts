import selectedFood from "./health.model";
import { Request, Response } from "express";
import axios from "axios";

const getTest = async (req: Request, res: Response) => {
  console.log("gettest");
  const uId = req.params.uId;
  console.log(uId);
  try {
    const getResult = await selectedFood.find({
      uId: uId,
    });
    res.send(getResult).status(200);
    console.log(getResult);
  } catch (err) {
    res.send(err).status(500);
  }
};

const postRequest = async (req: Request, res: Response) => {
  console.log("post ran!!");
  let { uId, fruitSchema } = req.body;
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
    console.log(result);
  } catch (error) {
    res.send(error).status(500);
  }
};

const patchFruit = async (req: Request, res: Response) => {
  console.log("Patch Request ran!");
  const { uId, index } = req.params;
  const updates = req.body.newPostObj;
  console.log(updates);
  try {
    const patchData = await selectedFood.updateOne(
      {
        uId: uId,
      },
      { $set: updates }
    );
    res.status(200).send(patchData);
  } catch (err) {
    res.send(err).status(500);
  }
};

module.exports = {
  getTest,
  postRequest,
  getFruit,
  patchFruit,
};
