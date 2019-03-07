import { connect } from "react-redux";
import { Layout } from "./presenter";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoginSuccess: loginReducer.isLoginSuccess,
    username: loginReducer.username,
    email: loginReducer.email
  };
};

export default withRouter(connect(mapStateToProps)(Layout));
