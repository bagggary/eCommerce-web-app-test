import { compose, legacy_createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middleware/logger";

const persistConfig = {
  key: "root",
  storage,

  //values that you dont want in local storage
  blackList: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWars = [
  process.env.NODE_ENV !== "productoin" && loggerMiddleware,
].filter(Boolean);

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
export const persister = persistStore(store);
