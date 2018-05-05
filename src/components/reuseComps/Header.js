import React from "react";
import { withRouter, NavLink, Link } from "react-router-dom";

const Header = () => {
  let links = [
    { title: "Create", link: "/create" },
    { title: "Browse", link: "/browse" },
    { title: "Calories", link: "/calories" },
    { title: "Profile", link: "/profile" }
  ];
  let myLinks = links.map((item, i) => {
    return (
      <NavLink
        key={i}
        exact
        to={item.link}
        activeStyle={{ borderBottom: "2px solid #4d5ed1", color: "#4d5ed1" }}
      >
        {item.title}
      </NavLink>
    );
  });
  return (
    <div id="header">
      <Link exact to="/" style={{ textDecoration: "None" }}>
        <div style={{ display: "flex" }}>
          <img
            src={require("../../Images/icons8-dumbbell-50.png")}
            alt="logo"
          />
          <h1 style={{ color: "black " }}>WerkItOut</h1>
        </div>
      </Link>
      <nav>{myLinks}</nav>
    </div>
  );
};

export default withRouter(Header);
