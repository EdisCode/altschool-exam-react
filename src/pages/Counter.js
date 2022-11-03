import React from "react";
import { Nav, Button, Footer } from "../components";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { state, increment, decrement, reset, setValue } = useCounter();

  return (
    <>
      <Nav />
      <section>
        <h1 className="title">Start The Counter To See Some Magic!</h1>
        <div className="count">Count: {state.count}</div>
        <div className="card">
          <Button backgroundColor="steelblue" color="white" onClick={setValue}>
            Multiply by 3
          </Button>
          <Button backgroundColor="green" color="white" onClick={increment}>
            +
          </Button>
          <Button backgroundColor="green" color="white" onClick={decrement}>
            -
          </Button>
          <Button backgroundColor="red" color="white" onClick={reset}>
            Reset
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Counter;
