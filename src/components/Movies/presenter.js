import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  goToMovieDetail(id, movie) {
    this.props.history.push(`/movie/${id}`, { movie });
  }

  render() {
    const { movies } = this.props;
    let allMovies;

    if (movies.length > 0) {
      allMovies = movies.map((movie, index) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={index} style={{
            justifyContent:"center",
            backgroundColor: '#eeeeee',
            display:"flex"
          }}>
            <Card
              onClick={() => this.goToMovieDetail(movie.id, movie)}
              className="card"
              style={{
                display: "flex",
                margin: "10px",
                cursor: "pointer",
                width: 450,
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
                    flexDirection: "column",
                    position:'relative'
                  }}
                >
                  <CardContent className="content" style={{ flex: "1",overflow:"auto" ,position:'relative'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>

                      <Avatar style={{
                        color: '#fff',
                        margin: '0px 10px 0px 0px',
                        backgroundColor: movie.vote_average > 5 ? '#4caf50' : '#ff5722'}}>{movie.vote_average}</Avatar>

                      <Typography component="h5" variant="h5">
                        {movie.title}
                      </Typography>
                    </div>
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
        style={{ margin: 0 , flex: '1 0 auto', width:'100%'}}
      >
        {allMovies}
      </Grid>
    );
  }
}

export default Movies;
