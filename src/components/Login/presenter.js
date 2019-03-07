import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

import TextField from '@material-ui/core/TextField';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  submitLoginForm = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password).catch(error => {
      console.log(error);
    });
  };

  handleChange = e => {
    const value = e.currentTarget.value;

    this.setState({
      [e.currentTarget.name]: value
    });
  };

  render() {
    let { username, password } = this.state;
    let { isLoginPending, isLoginSuccess, isLoginError } = this.props;

    if (isLoginSuccess) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <Fragment>
        <form  noValidate autoComplete="off">
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            margin="normal"
          />
        </form>
      </Fragment>
    );
  }
}
