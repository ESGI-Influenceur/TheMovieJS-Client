import { GET_MOVIES_SUCCESS, GET_MOVIE_DETAIL_SUCCESS } from "../actions";
import { combineReducers } from "redux";

const defaultStateMovies = {
  movies: []
};

const defaultStateMovieDetail = {
  movie: null
};

const moviesAllReducer = (state = defaultStateMovies, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        movies: action.payload.data
      };
    default:
      return state;
  }
};

const movieDetailReducer = (state = defaultStateMovieDetail, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL_SUCCESS:
      return {
        movie: action.payload.data
      };
    default:
      return state;
  }
};

const moviesReducer = combineReducers({
  moviesAllReducer,
  movieDetailReducer
});

export default moviesReducer;
