import { createStore, applyMiddleware, compose } from "redux";
import appReducer from "./reducers";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { persistStore } from "redux-persist";

export const client = axios.create({
  baseURL: "http://localhost:8080/api",
  responseType: "json"
});

const clientOptions = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      ({ getState }, config) => {
        let { loginReducer } = getState();

        if (loginReducer.token) {
          config.headers.Authorization = loginReducer.token;
        }

        return config;
      }
    ]
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(axiosMiddleware(client, clientOptions)))
);

export const persistor = persistStore(store);
