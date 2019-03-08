export const GET_MOVIES_PENDING = "GET_MOVIES_PENDING";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";

export const GET_MOVIE_DETAIL_PENDING = "GET_MOVIE_DETAIL_PENDING";
export const GET_MOVIE_DETAIL_SUCCESS = "GET_MOVIE_DETAIL_SUCCESS";
export const GET_MOVIE_DETAIL_ERROR = "GET_MOVIE_DETAIL_ERROR";

export const POST_COMMENT_PENDING = "POST_COMMENT_PENDING";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_ERROR = "POST_COMMENT_ERROR";

export const MOVIE_RATE_PENDING = "MOVIE_RATE_PENDING";
export const MOVIE_RATE_SUCCESS = "MOVIE_RATE_SUCCESS";
export const MOVIE_RATE_ERROR = "MOVIE_RATE_ERROR";

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

export function rateMovie(id, vote) {
  return {
    types: [MOVIE_RATE_PENDING, MOVIE_RATE_SUCCESS, MOVIE_RATE_ERROR],
    payload: {
      request: {
        method: "POST",
        url: `/ratings/movie/${id}`,
        data: {
          vote
        }
      }
    }
  };
}

export function commentMovie(id, content) {
  return {
    types: [POST_COMMENT_PENDING, POST_COMMENT_SUCCESS, POST_COMMENT_ERROR],
    payload: {
      request: {
        method: "POST",
        url: `/comments/movie/${id}`,
        data: {
          content
        }
      }
    }
  };
}
