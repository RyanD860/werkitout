import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../reuseComps/Header";
import { connect } from "react-redux";

class Browse extends Component {
  render() {
    let map;
    this.props.exercises.length > 0 ? (
      (map = this.props.exercises.map((item, i) => {
        return (
          <div key={i}>
            <Link to={`/exercise/${item.id}`}>
              <img
                alt="workout"
                src={item.image}
                style={{ width: "600px", height: "400px" }}
              />
            </Link>
            <p>{item.name}</p>
            <p>{item.musclegroup}</p>
          </div>
        );
      }))
    ) : (
      <h2>Couldn't get exercises</h2>
    );
    return (
      <div>
        <Header />
        <h1>Browse exercise page</h1>
        {map}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Browse));
//<div style={{ width: "700px", height: "500px", backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", margin: "auto" }} />;
