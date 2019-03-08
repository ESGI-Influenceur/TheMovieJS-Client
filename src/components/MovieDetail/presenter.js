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

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      alertCommentOpen: false,
      alertCommentText: null,
      newCommentContent: ""
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      id: id
    });
    this.props.getMovieDetail(id);
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

  handleAlertClose = () => {
    this.setState({ alertCommentOpen: false, alertCommentText: null });
  };

  render() {
    console.log(this.props);
    const { movie, isLoginSuccess } = this.props;
    const {
      newCommentContent,
      alertCommentOpen,
      alertCommentText
    } = this.state;

    let listComment;

    if (movie.comments.length > 0) {
      listComment = movie.comments.map((comment, index) => {
        return (
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
            <p>{movie.title}</p>
            <p>{movie.overview}</p>

            {/* Posté un commentaire */}
            {isLoginSuccess && (
              <FormControl className="container">
                <Typography component="h2" variant="h1" gutterBottom>
                  Commentaire
                </Typography>
                <TextField
                  name="newCommentContent"
                  label="Commentaire"
                  className="textField"
                  value={newCommentContent}
                  onChange={this.handleChange}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={this.submitComment}
                >
                  Commenter
                </Button>
              </FormControl>
            )}

            {/* Liste commentaire */}
            <List>{listComment}</List>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default MovieDetail;
