import { createSelector } from "reselect";
import { CategoryState } from "./category.reducer";
import { RootState } from "../store";

const selectCategoryReducer = (state : RootState): CategoryState => state.categories;



export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories
);

export const selectIsCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
