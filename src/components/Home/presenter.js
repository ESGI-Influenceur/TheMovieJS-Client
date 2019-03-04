// @flow
import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";

export class Home extends Component {
  componentDidMount() {
    this.props.getOwnerName();
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello world, this is react-redux-pwa-skeleton by{" "}
          {this.props.ownerName}
        </h1>
      </header>
    );
  }
}
