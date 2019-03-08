import { connect } from "react-redux";
import MovieDetail from "./presenter";
import { getMovieDetail, commentMovie, rateMovie } from "../../actions";

const mapStateToProps = ({ moviesReducer, loginReducer }) => {
  return {
    movie: moviesReducer.movieDetailReducer.movie,
    isLoginSuccess: loginReducer.isLoginSuccess,
    username: loginReducer.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetail: id => dispatch(getMovieDetail(id)),
    commentMovie: (id, content) => dispatch(commentMovie(id, content)),
    rateMovie: (id, vote) => dispatch(rateMovie(id, vote))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
