import React, { Component } from "react";

class TvDetail extends Component {
  componentDidMount() {
    this.props.getTvDetail(this.props.history.location.state.id);
    console.log(this.props);
  }

  render() {
    // const { movies } = this.props;
    // let allMovies;

    // if (movies.length > 0) {
    //   allMovies = movies.map((movie, index) => {
    //     return (
    //       <Grid item xs={12} md={6} lg={6} key={index}>
    //         <Card
    //           className="card"
    //           style={{
    //             display: "flex",
    //             margin: "auto",
    //             width: 500,
    //             maxHeight: 300
    //           }}
    //         >
    //           <CardMedia
    //             className="cover"
    //             style={{ minWidth: "200px", minHeight: "300px" }}
    //             image={movie.poster_path}
    //             title="Live from space album cover"
    //           />
    //           <div
    //             className="details"
    //             style={{
    //               display: "flex",
    //               flexDirection: "column"
    //             }}
    //           >
    //             <CardContent className="content" style={{ flex: "1 0 auto" }}>
    //               <Typography component="h5" variant="h5">
    //                 {movie.title}
    //               </Typography>
    //               <Typography paragraph>{movie.overview}</Typography>
    //             </CardContent>
    //           </div>
    //         </Card>
    //       </Grid>
    //     );
    //   });
    // }

    return <p>Tv detail</p>;
  }
}

export default TvDetail;
