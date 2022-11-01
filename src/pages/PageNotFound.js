import React from "react";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <div class="info">
        <h2>We can't find that page.</h2>
        <p>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
        </p>
        <p>We do apologise on it's behalf.</p>
        <div className="nav-container">
          <p>Let's go </p>
          <NavLink style={{ color: "steelblue" }} className="link" to="/">
            " Home "
          </NavLink>
          <p> and try from there.</p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
