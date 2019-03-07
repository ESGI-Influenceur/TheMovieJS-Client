import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, Row, Col, Typography } from "antd";

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
    const { Title } = Typography;

    if (isLoginSuccess) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <Fragment>
        <Title style={{ textAlign: "center" }}>Login</Title>
        <Row type="flex" justify="center">
          <Col lg={{ span: 8 }}>
            <Form className="login-form">
              <Form.Item>
                <Input
                  allowClear={true}
                  name="username"
                  onChange={this.handleChange}
                  value={username}
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  allowClear={true}
                  name="password"
                  onChange={this.handleChange}
                  value={password}
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={this.submitLoginForm}
                  loading={isLoginPending ? true : false}
                  block
                  type="primary"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
