import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        {this.props.user.id ? (
          <h1>{this.props.user.firstname} Profile</h1>
        ) : (
          <h1>Users profile</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Profile));
