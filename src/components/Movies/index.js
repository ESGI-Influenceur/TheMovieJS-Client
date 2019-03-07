import { connect } from "react-redux";
import Movies from "./presenter";
import { getMovies } from "../../actions";

const mapStateToProps = ({ moviesReducer }) => {
  return {
    movies: moviesReducer.moviesAllReducer.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
