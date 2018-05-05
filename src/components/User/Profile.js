import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import LineChart from "../reuseComps/LineChart";
import Header from "../reuseComps/Header";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      weights: [],
      newWeight: 0
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    axios.get(`/api/user/weight/${nextProps.user.id}`).then(resp => {
      this.setState({ weights: resp.data });
    });
  }

  onSubmit() {
    if (this.state.newWeight !== 0) {
      axios
        .post("/api/user/weight/add", {
          id: this.props.user.id,
          weight: this.state.newWeight
        })
        .then(resp => {
          this.setState({ weights: resp.data });
        });
    } else {
      swal({ text: "Enter a valid weight" });
    }
  }

  render() {
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
        {this.state.weights.length > 0 ? (
          <div>
            <h2>{this.state.weights[0].weight}</h2>
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
        {this.state.weights.length > 0 ? (
          <LineChart weight={this.state.weights} />
        ) : (
          false
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Profile));
