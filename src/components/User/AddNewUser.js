import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SubmitAccepted from "../reuseComps/SubmitAccepted";
class AddNewUser extends Component {
  constructor() {
    super();

    this.state = {
      weight: 0,
      height: 0,
      age: 0,
      submitted: false
    };
  }

  submitForm(id, weight, height, age) {
    axios
      .post("/api/user/add", {
        id: id,
        weight: Number(height),
        height: Number(height),
        age: Number(age)
      })
      .then(this.setState({ submitted: true }));
  }
  render() {
    return (
      <div id="add-new-user">
        {console.log(this.props)}
        <label>Enter your weight in pounds:</label>
        <input
          placeholder="weight"
          value={this.state.weight}
          onChange={e => this.setState({ weight: e.target.value })}
        />
        <label>Enter your height in inches:</label>
        <input
          placeholder="height"
          value={this.state.height}
          onChange={e => this.setState({ height: e.target.value })}
        />
        <label>Enter your current age:</label>
        <input
          placeholder="age"
          value={this.state.age}
          onChange={e => this.setState({ age: e.target.value })}
        />

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
