import { LOGIN_SUCCESS, LOGIN_PENDING, LOGIN_ERROR, LOGOUT } from "../actions";
import jwt_decode from "jwt-decode";

const defaultStateLogin = {
  isLoginPending: false,
  isLoginSuccess: false,
  isLoginError: false,
  token: null,
  username: null,
  userRoles: [],
  email: null
};

const loginReducer = (state = defaultStateLogin, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const decodedToken = jwt_decode(action.payload.data.token);

      return {
        ...state,
        token: action.payload.data.token,
        isLoginPending: false,
        isLoginError: false,
        isLoginSuccess: true,
        username: decodedToken.username,
        userRoles: decodedToken.userRoles,
        email: decodedToken.email
      };
    case LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoginPending: false,
        isLoginError: true
      };
    case LOGOUT:
      return {
        ...defaultStateLogin
      };
    default:
      return state;
  }
};

export default loginReducer;
