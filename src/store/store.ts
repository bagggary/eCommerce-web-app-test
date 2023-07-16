import {
  compose,
  legacy_createStore,
  applyMiddleware,
  Middleware,
} from "redux";
// import logger from "redux-logger";
// import { rootReducer } from "./root-reducer";
const rootReducer = require("./root-reducer");
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { loggerMiddleware } from "./middleware/logger";
const loggerMiddleware = require("./middleware/logger");

import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";
const rootSaga = require("./root-saga");

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type ExtendedPersistConfig = PersistConfig<RootState> & {
  whiteList: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,

  //values that you dont want in local storage
  whiteList: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWars = [
  process.env.NODE_ENV !== "productoin" && loggerMiddleware,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWars));

export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);
export const persister = persistStore(store);
