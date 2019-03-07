import { connect } from "react-redux";
import Tvs from "./presenter";
import { getTvs } from "../../actions";

const mapStateToProps = ({ tvsReducer }) => {
  return {
    tvs: tvsReducer.tvsAllReducer.tvs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTvs: () => dispatch(getTvs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tvs);
