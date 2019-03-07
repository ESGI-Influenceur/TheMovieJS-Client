import React, { Component } from "react";
import Layout from "./components/Layout";
import "antd/dist/antd.css";
import "./css/main.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}
