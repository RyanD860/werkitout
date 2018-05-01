import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import SubmitAccepted from "../reuseComps/SubmitAccepted";
class AddNewUser extends Component {
  constructor() {
    super();

    this.state = {
      weight: 0,
      height: 0,
      activityLevel: "Sedentary",
      submitted: false
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(e) {
    this.setState({ activityLevel: e.target.value });
  }
  submitForm(id, weight, height, activityLevel) {
    axios
      .post("/api/user/add", {
        id: id,
        weight: weight,
        height: Number(height),
        activityLevel: activityLevel
      })
      .then(this.setState({ submitted: true }));
  }
  render() {
    return (
      <div id="add-new-user">
        {console.log(this.props)}
        <label>Please enter your weight in pounds:</label>
        <input
          placeholder="weight"
          value={this.state.weight}
          onChange={e => this.setState({ weight: e.target.value })}
        />
        <label>Please enter your height in inches:</label>
        <input
          placeholder="height"
          value={this.state.height}
          onChange={e => this.setState({ height: e.target.value })}
        />

        <label>
          <input
            type="radio"
            value="Sedentary"
            checked={this.state.activityLevel === "Sedentary"}
            onChange={this.handleOptionChange}
          />
          Sedentary
        </label>

        <label>
          <input
            type="radio"
            value="Somewhat Active"
            checked={this.state.activityLevel === "Somewhat Active"}
            onChange={this.handleOptionChange}
          />
          Somewhat Active
        </label>

        <label>
          <input
            type="radio"
            value="Active"
            checked={this.state.activityLevel === "Active"}
            onChange={this.handleOptionChange}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            value="Very Active"
            checked={this.state.activityLevel === "Very Active"}
            onChange={this.handleOptionChange}
          />
          Very Active
        </label>
        <button
          onClick={() =>
            this.submitForm(
              this.props.user.id,
              this.state.weight,
              this.state.height,
              this.state.activityLevel
            )
          }
        >
          Finish
        </button>
        {this.state.submitted ? (
          <SubmitAccepted
            link={`/profile/this.props.user.id`}
            message="Information saved"
          />
        ) : (
          false
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(AddNewUser));
