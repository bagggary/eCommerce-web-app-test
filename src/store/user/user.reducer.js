import { USER_ACTION_TYPES } from "./user.types";

const InitialState = {
  currentUser: null,
};

export const userReducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      // throw new Error(`Unhandled type ${type} in user Reducer`);
      return state;
  }
};
