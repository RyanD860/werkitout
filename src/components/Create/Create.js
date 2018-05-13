import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../reuseComps/Header";
import AddWorkOut from "../reuseComps/AddWorkOut";

class Create extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Create workout page</h1>
        <AddWorkOut />
      </div>
    );
  }
}

export default withRouter(Create);
