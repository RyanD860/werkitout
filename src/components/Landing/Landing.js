import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const Landing = props => {
  return (
    <div>
      {console.log(props)}
      <h1>Werk Out</h1>
      <h2>Make exercising easy</h2>
      {props.user.id ? (
        <div>
          <Link to="/profile">
            <h2>Profile</h2>
          </Link>
          <h2
            onClick={() =>
              axios.get("/api/logout").then(resp => {
                if ((resp.message = "logged out")) {
                  window.location.href = "/";
                }
              })
            }
          >
            Log Out
          </h2>
        </div>
      ) : (
        <a href="http://localhost:3020/login">Log in/ Sign in</a>
      )}
    </div>
  );
};

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Landing));
