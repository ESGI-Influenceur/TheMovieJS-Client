import { connect } from "react-redux";
import { Login } from "./presenter";
import { login } from "../../actions";

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoginPending: loginReducer.isLoginPending,
    isLoginSuccess: loginReducer.isLoginSuccess,
    isLoginError: loginReducer.isLoginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
