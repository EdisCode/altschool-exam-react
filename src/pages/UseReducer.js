import React from "react";
import { Helmet } from "react-helmet-async";
import { Nav, Button, Footer } from "../components";
import useCounter from "../hooks/useCounter";

function UseReducer() {
  const { state, increment, decrement, reset, setValue } = useCounter();

  return (
    <>
      <Helmet>
        <title>Use Reducer</title>
        <meta
          name="description"
          content="Counter app that implements a counter with the four evident features with useReducer - increment, decrement, reset, setValue."
        />
        <link rel="canonical" href="/usereducer" />
      </Helmet>
      <Nav />
      <section>
        <h1 className="title">Counter Using Use Reducer!</h1>
        <div className="info">
          <p>
            N/B: Max count is 100. [Do not multiply a number that is more than
            100. Do not increment a number that is more than 100!]
          </p>
        </div>
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

export default UseReducer;
