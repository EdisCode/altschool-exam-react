import React from "react";
import { Route, Routes } from "react-router-dom";
import { CustomHook, UseReducer, PageNotFound, ErrorBoundary } from "../pages";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route exact index element={<CustomHook />} />
        <Route exact path="/usereducer" element={<UseReducer />} />
        <Route exact path="/errorboundary" element={<ErrorBoundary />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoute;
