import { USER_ACTION_TYPES } from "./user.types";

const InitialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = InitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPES.SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      // throw new Error(`Unhandled type ${type} in user Reducer`);
      return state;
  }
};
