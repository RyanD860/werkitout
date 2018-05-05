import React from "react";
import { withRouter, NavLink, Link } from "react-router-dom";

const Header = () => {
  const styles = {
    padding: {
      padding: "20px",
      cursor: "pointer"
    }
  };

  let links = [
    { title: "Create", link: "/" },
    { title: "Browse", link: "/" },
    { title: "Calories", link: "/" },
    { title: "Profile", link: "/profile" }
  ];
  let myLinks = links.map(item => {
    return (
      <NavLink
        style={styles.padding}
        exact
        to={item.link}
        activeStyle={{ color: "red" }}
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
