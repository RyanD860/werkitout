import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Landing = props => {
  return (
    <div>
      {console.log(props)}
      <h1>Werk Out</h1>
      <h2>Make exercising easy</h2>
      <a href="http://localhost:3020/login">Log in/ Sign in</a>
    </div>
  );
};

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Landing));
