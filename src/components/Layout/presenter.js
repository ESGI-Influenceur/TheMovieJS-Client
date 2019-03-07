import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Home from "../Home";
import Login from "../Login";
import Movies from "../Movies";
import MovieDetail from "../MovieDetail";
import Tv from "../Tv";
import TvDetail from "../TvDetail";

class Layout extends Component {
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

    return (
      <Fragment>
        <AppBar position="static">
          {!isAuthPage && (
            <Toolbar>
              <IconButton
                className="menuButton"
                color="inherit"
                aria-label="Menu"
              />
              <Typography variant="h6" color="inherit" className="grow">
                The MovieJS
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Accueil
              </Button>
              <Button color="inherit" component={Link} to="/movie">
                Films
              </Button>
              <Button color="inherit" component={Link} to="/tv">
                Series
              </Button>
              <span style={{ flex: 1 }} />
              {this.props.isLoginSuccess ? null : (
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              )}
            </Toolbar>
          )}
        </AppBar>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/movie" component={Movies} />
            <Route exact path="/movie/:id" component={MovieDetail} />
            <Route exact path="/tv" component={Tv} />
            <Route exact path="/tv/:id" component={TvDetail} />
            <Route component={() => <div>404 Not found </div>} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default withStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})(Layout);
