export const GET_MOVIES_PENDING = "GET_MOVIES_PENDING";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";

export const GET_MOVIE_DETAIL_PENDING = "GET_MOVIE_DETAIL_PENDING";
export const GET_MOVIE_DETAIL_SUCCESS = "GET_MOVIE_DETAIL_SUCCESS";
export const GET_MOVIE_DETAIL_ERROR = "GET_MOVIE_DETAIL_ERROR";

export function getMovies() {
  return {
    types: [GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR],
    payload: {
      request: {
        method: "GET",
        url: "/movies"
      }
    }
  };
}

export function getMovieDetail(id) {
  return {
    types: [
      GET_MOVIE_DETAIL_PENDING,
      GET_MOVIE_DETAIL_SUCCESS,
      GET_MOVIE_DETAIL_ERROR
    ],
    payload: {
      request: {
        method: "GET",
        url: `/movies/${id}`,
        data: {
          id
        }
      }
    }
  };
}
