import { connect } from "react-redux";
import Layout from "./presenter";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions";

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoginSuccess: loginReducer.isLoginSuccess,
    username: loginReducer.username,
    email: loginReducer.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);
