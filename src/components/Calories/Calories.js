import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../reuseComps/Header";

class Calories extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Calculate calories page</h1>
      </div>
    );
  }
}

export default withRouter(Calories);
