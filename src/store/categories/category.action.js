import { CATEGORIES_ACTION_TYPE } from "./category.types";

export const setCategories = (categoriesArray) => {
  return {
    type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
    payload: categoriesArray,
  };
};
