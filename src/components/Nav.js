import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "steelblue" } : { color: "grey" }
        }
        className="link"
        to="/"
      >
        Custom Hook
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "steelblue" } : { color: "grey" }
        }
        className="link"
        to="/usereducer"
      >
        Use Reducer
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "steelblue" } : { color: "grey" }
        }
        className="link"
        to="/errorboundary"
      >
        Error Boundary
      </NavLink>
    </div>
  );
}

export default Nav;
