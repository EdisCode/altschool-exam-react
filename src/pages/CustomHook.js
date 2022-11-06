import React from "react";
import { Helmet } from "react-helmet-async";
import { Nav, Button, Footer } from "../components";
import useCustom from "../hooks/useCustom";

function CustomHook() {
  const {
    value,
    increment,
    decrement,
    reset,
    setValue,
    maxValue,
    handleError,
  } = useCustom();

  return (
    <>
      <Helmet>
        <title>Custom Hook</title>
        <meta
          name="description"
          content="Counter app that implements a counter with the four evident features in a custom hook - increment, decrement, reset, setValue."
        />
        <link rel="canonical" href="/customhook" />
      </Helmet>
      <Nav />
      <section>
        <h1 className="title">Counter Using Custom Hook!</h1>
        <div className="info">
          <p>
            N/B: Max count is 50. [Do not multiply a number that is more than
            50. Do not increment a number that is more than 50!]
          </p>
        </div>
        <div className="count">Count: {value}</div>
        <div className="card">
          <Button
            backgroundColor="steelblue"
            color="white"
            onClick={() => {
              try {
                if (value >= maxValue) {
                  throw new Error(
                    "You multiplied a number that is more than 50."
                  );
                } else {
                  setValue(value * 3);
                }
              } catch (error) {
                handleError(error);
              }
            }}
          >
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

export default CustomHook;
