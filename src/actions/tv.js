export const GET_TVS_PENDING = "GET_TVS_PENDING";
export const GET_TVS_SUCCESS = "GET_TVS_SUCCESS";
export const GET_TVS_ERROR = "GET_TVS_ERROR";

export const GET_TV_DETAIL_PENDING = "GET_TV_DETAIL_PENDING";
export const GET_TV_DETAIL_SUCCESS = "GET_TV_DETAIL_SUCCESS";
export const GET_TV_DETAIL_ERROR = "GET_TV_DETAIL_ERROR";

export function getTvs() {
  return {
    types: [GET_TVS_PENDING, GET_TVS_SUCCESS, GET_TVS_ERROR],
    payload: {
      request: {
        method: "GET",
        url: "/serials"
      }
    }
  };
}

export function getTvDetail(id) {
  return {
    types: [GET_TV_DETAIL_PENDING, GET_TV_DETAIL_SUCCESS, GET_TV_DETAIL_ERROR],
    payload: {
      request: {
        method: "GET",
        url: `/serials/${id}`,
        data: {
          id
        }
      }
    }
  };
}
