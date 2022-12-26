import mongoose from "mongoose";
const Schema = mongoose.Schema;

const selectedFood = new Schema({
  list: String,
  healthFood: [
    new Schema({
      id: Number,
      ingridientName: String,
      calories: Number,
    }),
  ],
  totalCalories: Number,
  dateCreated: { type: Date, default: Date.now },
});

export default mongoose.models.selectedFood ||
  mongoose.model("selectedFood", selectedFood);
