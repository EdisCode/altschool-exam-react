import { useReducer } from "react";
import { useErrorHandler } from "react-error-boundary";

function useCounter() {
  const actions = {
    increment: "increment",
    decrement: "decrement",
    reset: "reset",
    setValue: "setValue",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "setValue":
        return { ...state, count: state.count * 3 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const maxCount = 100;

  const handleError = useErrorHandler();

  const increment = () => {
    try {
      if (state.count >= maxCount) {
        throw new Error("You incremented a number that is more than 100.");
      } else {
        dispatch({ type: actions.increment });
      }
    } catch (error) {
      handleError(error);
    }
  };

  const decrement = () => {
    dispatch({ type: actions.decrement });
  };

  const reset = () => {
    dispatch({ type: actions.reset });
  };

  const setValue = () => {
    try {
      if (state.count >= maxCount) {
        throw new Error("You multiplied a number that is more than 100.");
      } else {
        dispatch({ type: actions.setValue });
      }
    } catch (error) {
      handleError(error);
    }
  };

  return { state, increment, decrement, reset, setValue };
}

export default useCounter;
