import { CATEGORIES_ACTION_TYPE , Category } from "./category.types";

import { Action , ActionWithPayload } from "../../util/reducer/reducer.util";
import { withMatcher } from "../../util/reducer/reducer.util";

export type fetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>

export type fetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS , Category[]>

export type fetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED , Error>

export type CategoryAction = fetchCategoriesStart | fetchCategoriesSuccess | fetchCategoriesFailed

export const fetchCategoriesStart = withMatcher(() : fetchCategoriesStart => {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
  };
});


export const fetchCategoriesSuccess = withMatcher((categoriesArray : Category[]) : fetchCategoriesSuccess => {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesArray,
  };
});



export const fetchCategoriesFailed = withMatcher((error : Error) : fetchCategoriesFailed => {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
});
