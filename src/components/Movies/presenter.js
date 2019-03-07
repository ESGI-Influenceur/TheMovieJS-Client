import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  goToMovieDetail(id) {
    this.props.history.push(`/movie/${id}`, { id });
  }

  render() {
    const { movies } = this.props;
    let allMovies;

    if (movies.length > 0) {
      allMovies = movies.map((movie, index) => {
        return (
          <Grid item xs={12} md={6} lg={6} key={index}>
            <Card
              onClick={() => this.goToMovieDetail(movie.id)}
              className="card"
              style={{
                display: "flex",
                margin: "auto",
                width: 500,
                maxHeight: 300
              }}
            >
              <CardMedia
                className="cover"
                style={{ minWidth: "200px", minHeight: "300px" }}
                image={movie.poster_path}
                title="Live from space album cover"
              />
              <div
                className="details"
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <CardContent className="content" style={{ flex: "1 0 auto" }}>
                  <Typography component="h5" variant="h5">
                    {movie.title}
                  </Typography>
                  <Typography paragraph>{movie.overview}</Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        );
      });
    }

    return (
      <Grid
        container
        direction="row"
        justify="center"
        spacing={40}
        style={{ margin: 50 }}
      >
        {allMovies}
      </Grid>
    );
  }
}

export default Movies;
