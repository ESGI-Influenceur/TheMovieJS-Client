import { GET_TVS_SUCCESS, GET_TV_DETAIL_SUCCESS } from "../actions";
import { combineReducers } from "redux";

const defaultStateTvs = {
  tvs: []
};

const defaultStateTvDetail = {
  tv: null
};

const tvsAllReducer = (state = defaultStateTvs, action) => {
  switch (action.type) {
    case GET_TVS_SUCCESS:
      return {
        tvs: action.payload.data
      };
    default:
      return state;
  }
};

const tvDetailReducer = (state = defaultStateTvDetail, action) => {
  switch (action.type) {
    case GET_TV_DETAIL_SUCCESS:
      return {
        tv: action.payload.data
      };
    default:
      return state;
  }
};

const tvsReducer = combineReducers({
  tvsAllReducer,
  tvDetailReducer
});

export default tvsReducer;
