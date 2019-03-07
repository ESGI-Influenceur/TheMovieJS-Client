import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Layout as AntLayout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";

export class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: "/home"
    };
  }

  isAuthPage = () => {
    if (
      this.props.location.pathname === "/login" ||
      this.props.location.pathname === "/register"
    ) {
      return true;
    }

    return false;
  };

  selectedMenu = () => {
    if (this.state.selectedMenu !== this.props.location.pathname) {
      this.setState({
        selectedMenu: this.props.location.pathname
      });
    }
  };

  render() {
    const isAuthPage = this.isAuthPage();
    const { selectedMenu } = this.state;
    const { Header, Footer, Content } = AntLayout;

    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;

    console.log(this.props);

    return (
      <AntLayout>
        {!isAuthPage && (
          <Header
            style={{ position: "fixed", zIndex: 1, width: "100%", padding: 0 }}
          >
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={[selectedMenu]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="/">
                <Link to="/">
                  <Icon type="home" /> Home
                </Link>
              </Menu.Item>
              <Menu.Item key="/movie">
                <Link to="/movie">
                  <Icon type="thunderbolt" />
                  Movies
                </Link>
              </Menu.Item>
              <Menu.Item key="/tv">
                <Link to="/tv">
                  <Icon type="fire" />
                  Tv series
                </Link>
              </Menu.Item>
              {this.props.isLoginSuccess && (
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Icon type="user" />
                      {this.props.username}
                    </span>
                  }
                >
                  <MenuItemGroup title="User settings">
                    <Menu.Item key="/profile">
                      <Link to="/profile">Profile</Link>
                    </Menu.Item>
                    <Menu.Item
                      key="/logout"
                      onClick={() => console.log("logout clicked")}
                    >
                      Logout
                    </Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              )}
            </Menu>
          </Header>
        )}
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <div style={{ padding: 24, minHeight: "100%" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route component={() => <div>404 Not found </div>} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", background: "#fff" }}>
          The MovieJS ©2019 Created with{" "}
          <Icon style={{ color: "#CA3F51" }} type="heart" theme="filled" /> by
          Les Influenceurs
        </Footer>
      </AntLayout>
    );
  }
}
