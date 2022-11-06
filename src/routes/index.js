import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Home, PageNotFound, UseReducer, FallBack, CustomHook } from "../pages";

function AppRoute() {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging:", error, errorInfo);
  };

  return (
    <>
      <Routes>
        <Route exact index element={<Home />} />
        <Route
          exact
          path="/customhook"
          element={
            <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
              <CustomHook />
            </ErrorBoundary>
          }
        />
        <Route
          exact
          path="/usereducer"
          element={
            <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
              <UseReducer />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoute;
