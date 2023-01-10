import mongoose from "mongoose";
const Schema = mongoose.Schema;

const selectedFood = new Schema({
  uId: String,
  fruitSchema: [
    new Schema({
      index: Number,
      totalCalorie: Number,
      userTargetedCalorie: Number,
      fruit: [
        new Schema({
          name: String,
          nutritions: new Schema({
            carbohydrates: Number,
            protein: Number,
            fat: Number,
            calories: Number,
            sugar: Number,
          }),
        }),
      ],
    }),
  ],
});

export default mongoose.models.selectedFood ||
  mongoose.model("selectedFood", selectedFood);
