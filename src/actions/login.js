export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";

export function login(username, password) {
  return {
    types: [LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR],
    payload: {
      request: {
        method: "POST",
        url: "/auth/login",
        data: {
          username,
          password
        }
      }
    }
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
