export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGOUT = "LOGOUT";

export function register(name, email, username, password) {
  return {
    types: [REGISTER_PENDING, REGISTER_SUCCESS, REGISTER_ERROR],
    payload: {
      request: {
        method: "POST",
        url: "/auth/register",
        data: {
          name,
          email,
          username,
          password
        }
      }
    }
  };
}
