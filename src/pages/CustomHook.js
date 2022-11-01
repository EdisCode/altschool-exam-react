import React from "react";
import altschoolLogo from "../assets/altschoolLogo.svg";
import { Nav } from "../components";

function CustomHook() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={altschoolLogo} className="App-logo" alt="logo" />
      </header>
      <Nav />
    </div>
  );
}

export default CustomHook;
