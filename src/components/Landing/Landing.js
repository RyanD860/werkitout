import React from "react";
import { Link } from "react-router-dom";

const Landing = props => {
  return (
    <div>
      <h1>Werk Out</h1>
      <h2>Make exercising easy</h2>
      <a href="http://localhost:3020/login">Log in/ Sign in</a>
    </div>
  );
};

const mapStateToProps = state => state;

export default Landing;
