import { REGISTER_SUCCESS, REGISTER_PENDING, REGISTER_ERROR } from "../actions";

const defaultStateRegister = {
  isRegisterPending: false,
  isRegisterSuccess: false,
  isRegisterError: false
};

const registerReducer = (state = defaultStateRegister, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegisterPending: false,
        isRegisterError: false,
        isRegisterSuccess: true
      };
    case REGISTER_PENDING:
      return {
        ...state,
        isRegisterPending: true
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isRegisterPending: false,
        isRegisterError: true
      };
    default:
      return state;
  }
};

export default registerReducer;
