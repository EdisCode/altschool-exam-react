import React from "react";
import { Nav } from "../components";

function ErrorBoundary() {
  return (
    <>
      <Nav />
      <section>
        <h1 className="title">Error Boundary</h1>
      </section>
    </>
  );
}

export default ErrorBoundary;
