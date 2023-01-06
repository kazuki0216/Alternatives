import mongoose from "mongoose";
const Schema = mongoose.Schema;

const selectedFood = new Schema({
  index: Number,
  fruitName: [
    new Schema({
      name: String,
      nutritions: [
        {
          carbohydrates: Number,
          protein: Number,
          fat: Number,
          calories: Number,
          sugar: Number,
        },
      ],
    }),
  ],
  totalCalories: Number,
  dateCreated: { type: Date, default: Date.now },
});

export default mongoose.models.selectedFood ||
  mongoose.model("selectedFood", selectedFood);
