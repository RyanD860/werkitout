import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../reuseComps/Header";

class Calories extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.weights.length > 0
          ? console.log(
              this.props.weights[this.props.weights.length - 1].weight
            )
          : false}
        <h1>Calculate calories page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Calories));
