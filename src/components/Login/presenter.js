import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formError: null,
      isErrorOpen: false
    };
  }

  componentDidMount() {
    if (this.props.isLoginError) {
      this.setState({
        isErrorOpen: true
      });
    }
  }

  submitLoginForm = e => {
    e.preventDefault();
    this.props
      .login(this.state.username, this.state.password)
      .catch(({ error }) => {
        this.setState({
          formError: error.response.data.message,
          isErrorOpen: true
        });
      });
  };

  handleChange = e => {
    const value = e.currentTarget.value;

    this.setState({
      [e.currentTarget.name]: value
    });
  };

  handleErrorClose = e => {
    this.setState({ isErrorOpen: false, formError: null });
  };

  render() {
    let { username, password, formError, isErrorOpen } = this.state;
    let { isLoginSuccess } = this.props;

    if (isLoginSuccess) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          open={isErrorOpen & (formError != null) ? true : false}
          autoHideDuration={6000}
          onClose={this.handleErrorClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className="close"
              onClick={this.handleErrorClose}
            >
              <CloseIcon className="icon" />
            </IconButton>
          ]}
          message={<span id="message-id">{formError}</span>}
        />
        <FormControl className="container">
          <Typography component="h2" variant="h1" gutterBottom>
            Login
          </Typography>
          <TextField
            name="username"
            label="Nom d'Utilisateur"
            className="textField"
            value={username}
            onChange={this.handleChange}
            margin="normal"
          />

          <TextField
            name="password"
            label="Mot de passe"
            className="textField"
            type="password"
            value={password}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={this.submitLoginForm}
          >
            Se connecter
          </Button>
        </FormControl>
      </Grid>
    );
  }
}
