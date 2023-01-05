export interface healthList {
  list: String;
}

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
