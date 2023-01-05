export interface healthList {
  list: String;
}

export type data = {
  genus?: string;
  name: string;
  id?: number;
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
