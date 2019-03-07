import { persistCombineReducers } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

import loginReducer from "./login";

const persistConfig = {
  key: "root",
  storage: sessionStorage
};

const appReducer = persistCombineReducers(persistConfig, {
  loginReducer
});

export default appReducer;
