import { useReducer } from "react";

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

  const increment = () => {
    dispatch({ type: actions.increment });
  };

  const decrement = () => {
    dispatch({ type: actions.decrement });
  };

  const reset = () => {
    dispatch({ type: actions.reset });
  };

  const setValue = () => {
    dispatch({ type: actions.setValue });
  };

  return { state, increment, decrement, reset, setValue };
}

export default useCounter;
