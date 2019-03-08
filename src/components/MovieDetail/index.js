import { connect } from "react-redux";
import MovieDetail from "./presenter";
import { getMovieDetail, commentMovie } from "../../actions";

const mapStateToProps = ({ moviesReducer, loginReducer }) => {
  return {
    movie: moviesReducer.movieDetailReducer.movie,
    isLoginSuccess: loginReducer.isLoginSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetail: id => dispatch(getMovieDetail(id)),
    commentMovie: (id, content) => dispatch(commentMovie(id, content))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
