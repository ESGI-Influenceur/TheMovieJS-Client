import { persistCombineReducers } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

import loginReducer from "./login";
import moviesReducer from "./movies";
import tvsReducer from "./tv";
import registerReducer from "./register";

const persistConfig = {
  key: "root",
  storage: sessionStorage
};

const appReducer = persistCombineReducers(persistConfig, {
  loginReducer,
  moviesReducer,
  tvsReducer,
  registerReducer
});

export default appReducer;
