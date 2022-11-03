import React from "react";
import Button from "../components/Button";

function FallBack({ error, resetErrorBoundary }) {
  return (
    <div className="page-not-found">
      <h1>OOPS!!!</h1>
      <div>
        <h2>You got an error because:</h2>
        <p>{error.message}</p>
        <Button
          backgroundColor="steelblue"
          color="white"
          onClick={resetErrorBoundary}
        >
          Oya Try again
        </Button>
      </div>
    </div>
  );
}

export default FallBack;
