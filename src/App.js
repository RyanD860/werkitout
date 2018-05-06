import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser, getExercises } from "./ducks/reducer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getExercises();
  }

  render() {
    return (
      <div id="backgroundcolor">
        <div className="App">
          <MuiThemeProvider>{routes}</MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { getUser, getExercises })(App)
);
