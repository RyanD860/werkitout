import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../reuseComps/Header";

class Calories extends Component {
  render() {
    let currentWeight;
    let maintain;
    this.props.user.id
      ? (currentWeight = this.props.weights[this.props.weights.length - 1]
          .weight)
      : false;
    currentWeight
      ? (maintain =
          10 * (currentWeight * 0.45359237) +
          (6.25 * (this.props.user.height * 2.54) -
            5 * this.props.user.age +
            300))
      : false;

    return (
      <div>
        <Header />
        <h1>Calculate calories page</h1>
        {this.props.weights.length > 0 ? (
          <h1>
            Current weight is :{" "}
            {this.props.weights[this.props.weights.length - 1].weight}
          </h1>
        ) : (
          false
        )}
        {maintain ? (
          <h2>
            Calories to eat per day to maintain weight : {maintain.toFixed(0)}
          </h2>
        ) : (
          false
        )}
        {maintain ? (
          <h2>
            Calories to eat per day to lose one pound per week :{" "}
            {(maintain - 500).toFixed(0)}
          </h2>
        ) : (
          false
        )}
        {maintain ? (
          <h2>
            Calories to eat per day to lose two pounds per week :{" "}
            {(maintain - 1000).toFixed(0)}
          </h2>
        ) : (
          false
        )}
        {maintain ? (
          <h2>
            Calories to eat per day to gain one pound per week :{" "}
            {(maintain + 500).toFixed(0)}
          </h2>
        ) : (
          false
        )}
        {maintain ? (
          <h2>
            Calories to eat per day to gain two pounds per week :{" "}
            {(maintain + 1000).toFixed(0)}
          </h2>
        ) : (
          false
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Calories));
