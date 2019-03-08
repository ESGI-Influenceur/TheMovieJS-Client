import { connect } from "react-redux";
import { Register } from "./presenter";
import { register } from "../../actions";

const mapStateToProps = ({ registerReducer, loginReducer }) => {
  return {
    isRegisterPending: registerReducer.isRegisterPending,
    isRegisterSuccess: registerReducer.isRegisterSuccess,
    isRegisterError: registerReducer.isRegisterError,

    isLoginSuccess: loginReducer.isLoginSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: (name, email, username, password) =>
      dispatch(register(name, email, username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
