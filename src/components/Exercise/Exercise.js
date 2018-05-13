import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Header from "../reuseComps/Header";
import _ from "lodash";

const Exercise = props => {
  let selected = _.find(props.exercises, item => {
    return item.id == props.match.params.id;
  });

  return (
    <div>
      {console.log(props)}
      <Header />
      {selected ? (
        <div>
          <Link to="/browse">
            <p>Back to Browse</p>
          </Link>
          <h1>{selected.name}</h1>
          <img src={selected.image} /> <p>{selected.description}</p>
          <p>{selected.musclegroup}</p>
          <p>{selected.equipment}</p>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Exercise));
