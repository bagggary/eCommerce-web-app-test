import { USER_ACTION_TYPES } from "./user.types";
import { withMatcher , Action , ActionWithPayload } from "../../util/reducer/reducer.util";
import { UserData } from "../../util/firebase/firebase.util";
import { AdditionalInformation } from "../../util/firebase/firebase.util";

export type EmailSignIn  = {
  email : string ,
  password : string 
}

export type SignUp = EmailSignIn & {
  displayName?: string
}

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER , UserData >

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START ,  EmailSignIn>

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS , UserData>

export type SignInFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILURE , Error>

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START , SignUp >

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS , {user : UserData , additionalDetails : AdditionalInformation } >

export type SignUpFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILURE , Error>

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>

export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILURE , Error>


export const setCurrentUser = withMatcher((user : UserData ) : SetCurrentUser  => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
});

export const checkUserSession = withMatcher((): CheckUserSession => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION,
}));
export const googleSignInStart = withMatcher(() : GoogleSignInStart=> ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
}));
export const emailSignInStart = withMatcher((email : string , password : string) : EmailSignInStart => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: { email, password },
}));
export const singInSuccess = withMatcher((user : UserData) : SignInSuccess => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user,
}));
export const singInFailure = withMatcher((error : Error) : SignInFailure => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
  payload: error,
}));
export const signUpStart = withMatcher((email : string , password : string,  displayName : string) : SignUpStart => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: { email, password, displayName },
}));

export const signUpSuccess = withMatcher((user : UserData, additionalDetails : AdditionalInformation) : SignUpSuccess => ({
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  payload: { user, additionalDetails },
}));

export const singUpFailure = withMatcher((error : Error) : SignUpFailure => ({
  type: USER_ACTION_TYPES.SIGN_UP_FAILURE,
  payload: error,
}));

export const signOutStart = withMatcher(() : SignOutStart => ({
  type: USER_ACTION_TYPES.SIGN_OUT_START,
}));
export const signOutSuccess = withMatcher(() : SignOutSuccess => ({
  type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
}));
export const signOutFailure = withMatcher((error: Error) : SignOutFailure => ({
  type: USER_ACTION_TYPES.SIGN_OUT_FAILURE,
  payload: error,
}));
