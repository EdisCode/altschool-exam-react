import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Home, PageNotFound, Counter, FallBack } from "../pages";

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
          path="/counter"
          element={
            <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
              <Counter />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoute;
