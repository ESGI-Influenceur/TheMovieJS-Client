import { connect } from "react-redux";
import TvDetail from "./presenter";
import { getTvDetail } from "../../actions";

const mapStateToProps = ({ tvsReducer }) => {
  return {
    tv: tvsReducer.tvDetailReducer.tv
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTvDetail: id => dispatch(getTvDetail(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TvDetail);
