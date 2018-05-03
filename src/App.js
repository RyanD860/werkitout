import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "./ducks/reducer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>{routes}</MuiThemeProvider>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(App));
