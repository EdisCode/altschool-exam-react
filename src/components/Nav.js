import React from "react";
import { NavLink } from "react-router-dom";
import altschoolLogo from "../assets/altschoolLogo.svg";

function Nav() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <a href="https://www.altschoolafrica.com/">
          <img src={altschoolLogo} className="logo" alt="logo" />
        </a>
      </div>

      <div className="nav">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "steelblue" } : { color: "grey" }
          }
          className="link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "steelblue" } : { color: "grey" }
          }
          className="link"
          to="/counter"
        >
          Counter
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
