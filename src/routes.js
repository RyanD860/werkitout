import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Profile from "./components/User/Profile";
import AddNewUser from "./components/User/AddNewUser";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/profile" component={Profile} />
    <Route path="/addNewProfile" component={AddNewUser} />
  </Switch>
);
