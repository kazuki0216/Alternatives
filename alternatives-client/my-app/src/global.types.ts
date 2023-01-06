export interface healthList {
  list: String;
}

export type FoodObject = {
  index: number;
  fruit: data[];
  totalCalories: number;
  userSetCalorie: number;
};
export type data = {
  id?: number;
  genus?: string;
  name: string;
  family?: string;
  order?: string;
  nutritions: nutrition;
};

export type nutrition = {
  calories: number;
  carbohydrates?: number;
  fat?: number;
  protein?: number;
  sugar?: number;
};
