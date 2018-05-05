import React from "react";
import { Switch, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import Landing from "./components/Landing/Landing";
import Profile from "./components/User/Profile";
import AddNewUser from "./components/User/AddNewUser";
import Browse from "./components/Browse/Browse";
import Calories from "./components/Calories/Calories";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/create" component={Create} />
    <Route path="/browse" component={Browse} />
    <Route path="/calories" component={Calories} />
    <Route path="/profile" component={Profile} />
    <Route path="/addNewProfile" component={AddNewUser} />
  </Switch>
);
