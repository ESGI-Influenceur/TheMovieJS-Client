import React, { Component, Fragment } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Chip from "@material-ui/core/Chip";
import StarRatings from "react-star-ratings";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      alertCommentOpen: false,
      alertCommentText: null,
      newCommentContent: "",
      value: 0
    };
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.setState({
      id: id
    });
    this.props.getMovieDetail(id);
    if (this.props.movie.votes.length > 0) {
      this.props.movie.votes.forEach(vote => {
        if (vote.user) {
          if (vote.user.username === this.props.username) {
            this.setState({
              userRating: vote.vote
            });
            return;
          }
        }
      });
    }
  }

  submitComment = e => {
    e.preventDefault();
    const { newCommentContent, id } = this.state;
    if (newCommentContent.length > 0) {
      this.props
        .commentMovie(id, newCommentContent)
        .then(() => {
          const { id } = this.props.match.params;
          this.setState({
            newCommentContent: "",
            alertCommentOpen: true,
            alertCommentText: "Commentaire envoyé avec succés"
          });
          this.props.getMovieDetail(id);
        })
        .catch(({ error }) => {
          this.setState({
            alertCommentOpen: true,
            alertCommentText: error.response.data.message
          });
        });
    } else {
      this.setState({
        alertCommentOpen: true,
        alertCommentText: "Un commentaire ne peut pas être vide"
      });
    }
  };

  handleChange = e => {
    const value = e.currentTarget.value;

    this.setState({
      [e.currentTarget.name]: value
    });
  };

  handleTabs = (event, value) => {
    this.setState({ value });
  };

  handleRating = userRate => {
    console.log(this.props);
    this.setState({
      userRating: userRate
    });

    this.props.rateMovie(this.props.match.params.id, userRate).then(() => {
      this.props.getMovieDetail(this.props.match.params.id);
    });
  };

  handleAlertClose = () => {
    this.setState({ alertCommentOpen: false, alertCommentText: null });
  };

  render() {
    console.log(this.state.value);

    const { value } = this.state;
    const { movie, isLoginSuccess } = this.props;
    const {
      newCommentContent,
      alertCommentOpen,
      alertCommentText,
      userRating
    } = this.state;

    let listComment;
    let listGenre;

    if (movie && movie.comments.length > 0) {
      listComment = movie.comments.map((comment, index) => {
        return (
          <Fragment>
            <ListItem alignItems="flex-start" key={index}>
              <ListItemAvatar>
                <Avatar>{comment.user.username[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={comment.user.username}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className="inline"
                      color="textPrimary"
                    >
                      {comment.content}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </Fragment>
        );
      });
    }

    if (movie) {
      listGenre = movie.genre.map((genre, index) => {
        console.log(genre.name);
        return (
          <Chip key={index} label={genre.name} style={{ margin: "0 5px" }} />
        );
      });
    }

    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          open={alertCommentOpen & (alertCommentText != null) ? true : false}
          autoHideDuration={6000}
          onClose={this.handleAlertClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className="close"
              onClick={this.handleAlertClose}
            >
              <CloseIcon className="icon" />
            </IconButton>
          ]}
          message={<span id="message-id">{alertCommentText}</span>}
        />
        {movie && (
          <Fragment>
            <div
              className="fiche"
              style={{ backgroundImage: "url(" + movie.backdrop_path + ")" }}
            >
              <div className="ficher-overlay" />
              <div className="fiche-content">
                <div>
                  <img className="poster-image" src={movie.poster_path} />
                </div>
                <div className="description">
                  <h1>{movie.title}</h1>

                  <Avatar
                    style={{
                      color: "#fff",
                      margin: "0px 0px 20px 0px",
                      backgroundColor:
                        movie.vote_average > 5 ? "#4caf50" : "#ff5722"
                    }}
                  >
                    {movie.vote_average}
                  </Avatar>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexWrap: "wrap"
                    }}
                  >
                    {listGenre}
                  </div>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>

            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={this.handleTabs}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Comments" />
                <Tab label="Video" />
              </Tabs>
            </AppBar>

            {value === 0 && (
              <div
                style={{
                  backgroundColor: "#eeeeee",
                  width: "100%",
                  position: "relative"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <List
                    subheader={
                      <ListSubheader
                        style={{
                          background: "white",
                          borderBottom: "1px solid rgba(0,0,0,0.1)"
                        }}
                        component="div"
                      >
                        Comments list
                      </ListSubheader>
                    }
                  >
                    <StarRatings
                      rating={userRating}
                      starRatedColor="yellow"
                      changeRating={this.handleRating}
                      numberOfStars={5}
                      name="userRating"
                    />
                    {listComment}
                  </List>

                  {isLoginSuccess && (
                    <Paper
                      elevation={1}
                      style={{
                        width: "400px",
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px 0px",
                        margin: "50px auto"
                      }}
                    >
                      <FormControl className="container">
                        <TextField
                          name={"newCommentContent"}
                          id="outlined-multiline-flexible"
                          label="Multiline"
                          multiline
                          rowsMax="4"
                          value={newCommentContent}
                          onChange={this.handleChange}
                          margin="normal"
                          variant="outlined"
                        />
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          style={{ marginTop: "2Opx" }}
                          onClick={this.submitComment}
                        >
                          Commenter
                        </Button>
                      </FormControl>
                    </Paper>
                  )}
                </div>
              </div>
            )}
            {value === 1 && (
              <div style={{ display: "flex" }}>
                <iframe
                  style={{
                    height: "80vh",
                    width: "100%",
                    position: "relative"
                  }}
                  src={movie.video}
                />
              </div>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default MovieDetail;
