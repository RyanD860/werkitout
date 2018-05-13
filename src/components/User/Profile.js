import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import LineChart from "../reuseComps/LineChart";
import Header from "../reuseComps/Header";
import { getWeights, addWeight } from "../../ducks/reducer";
import _ from "lodash";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      newWeight: 0,
      currentWeight: 0
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      this.props.getWeights(nextProps.user.id);
    }
  }

  onSubmit() {
    if (this.state.newWeight !== 0) {
      this.props.addWeight(this.props.user.id, this.state.newWeight);
    } else {
      swal({ text: "Enter a valid weight" });
    }
  }

  logOut() {
    axios.get("/api/logout").then(resp => {
      if ((resp.message = "logged out")) {
        window.location.href = "/";
      }
    });
  }

  render() {
    let current = _.maxBy(this.props.weights, item => {
      return item.id;
    });
    console.log(current);
    return (
      <div>
        <Header />
        {this.props.user.id ? (
          <h1>
            {this.props.user.firstname} {this.props.user.lastname}
          </h1>
        ) : (
          <h1>Users profile</h1>
        )}

        <button onClick={this.logOut}>Sign Out</button>

        {this.props.weights.length > 0 ? (
          <div>
            <h2>{current ? current.weight : false}</h2>
            <input
              type="text"
              placeholder="Log new weight"
              onChange={e => this.setState({ newWeight: e.target.value })}
            />
            <button
              onClick={() => {
                this.onSubmit();
              }}
            >
              Enter
            </button>
          </div>
        ) : (
          <h2>No weight entered</h2>
        )}
        {this.props.weights.length > 0 ? (
          <div style={{ width: "60%" }}>
            <LineChart weight={this.props.weights} />
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { getWeights, addWeight })(Profile)
);
