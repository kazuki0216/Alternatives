import { nutrition } from "../types/global";
export class FruitSchema {
  genus?: string;
  name: string;
  id?: number;
  family?: string;
  order?: string;
  nutrition: nutrition;

  public constructor() {
    this.name = "test";
    this.nutrition = {
      calories: 0,
      carbohydrates: 0,
      fat: 0,
      protein: 0,
      sugar: 0,
    };
  }
}
