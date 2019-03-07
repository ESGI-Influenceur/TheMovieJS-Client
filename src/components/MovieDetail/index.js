import { connect } from "react-redux";
import MovieDetail from "./presenter";
import { getMovieDetail } from "../../actions";

const mapStateToProps = ({ moviesReducer }) => {
  return {
    movie: moviesReducer.movieDetailReducer.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetail: id => dispatch(getMovieDetail(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
