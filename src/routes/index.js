import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, PageNotFound, ErrorBoundary, Counter } from "../pages";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route exact index element={<Home />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/errorboundary" element={<ErrorBoundary />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoute;
