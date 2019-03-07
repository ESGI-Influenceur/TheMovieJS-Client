import React, { Component,Fragment } from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


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

    console.log(this.props);


    return (
      <Fragment>

        {!isAuthPage && (
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" >
                News
              </Typography>

              <Button color="inherit" component={Link} to="/movie">
                Movie
              </Button>

              <Button color="inherit" component={Link} to="/movie">
                Tv
              </Button>
              <Button color="inherit" component={Link} to="/movie">
                Movie
              </Button>

            </Toolbar>
          </AppBar>
        )}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={() => <div>404 Not found </div>} />
          </Switch>
        </main>
      </Fragment>


  /*
        <Footer style={{ textAlign: "center", background: "#fff" }}>
          The MovieJS ©2019 Created with{" "}
          <Icon style={{ color: "#CA3F51" }} type="heart" theme="filled" /> by
          Les Influenceurs
        </Footer>*/
    );
  }
}
