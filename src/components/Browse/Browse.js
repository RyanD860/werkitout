import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../reuseComps/Header";

class Browse extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Browse exercise page</h1>
      </div>
    );
  }
}

export default withRouter(Browse);
