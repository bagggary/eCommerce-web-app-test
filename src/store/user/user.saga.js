import { takeLatest, all, call, put, take } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";
import {
  singInSuccess,
  singInFailure,
  signUpSuccess,
  singUpFailure,
  signOutSuccess,
  signOutFailure,
} from "./user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  SignOutUser,
} from "../../util/firebase/firebase.util";
import { signInWithEmailAndPassword } from "firebase/auth";

export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(singInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    put(singInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (error) {
    put(singInFailure(error));
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmailAndPassword, email, password);
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put(singInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put(singInFailure(error));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapShotFromUserAuth, user, additionalDetails);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess, user, { displayName });
  } catch (error) {
    yield put(singUpFailure(error));
  }
}
export function* signOut() {
  try {
    yield call(SignOutUser);
    yield put(signOutSuccess);
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
