import { USER_ACTION_TYPES  } from "./user.types";
import { AnyAction } from "redux";
import { UserData } from "../../util/firebase/firebase.util";


import {  singInFailure , signOutSuccess , signOutFailure , singInSuccess , singUpFailure } from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null, 
  readonly isLoading: boolean
  readonly error : Error | null
}

const InitialState : UserState = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userReducer = (state = InitialState, action : AnyAction) => {

  if(singInSuccess.match(action)){
    return {
      ...state,
       currentUser: action.payload,
    }
  }

  if(signOutSuccess.match(action)){
    return {
      ...state ,
      currentUser : null
    }
  }

  if(signOutFailure.match(action) || singInFailure.match(action) || singUpFailure.match(action)){
    return {
      ...state ,
      error : action.payload
    }
  }

  return state

  // switch (type) {
  //   case USER_ACTION_TYPES.SIGN_IN_FAILURE:
  //     return {
  //       ...state,
  //       error: payload,
  //     };
  //   case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //     return {
  //       ...state,
  //       currentUser: null,
  //     };
  //   case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //   case USER_ACTION_TYPES.SIGN_UP_FAILURE:
  //     return {
  //       ...state,
  //       currentUser: payload,
  //     };
  //   default:
  //     // throw new Error(`Unhandled type ${type} in user Reducer`);
  //     return state;
  // }
};
