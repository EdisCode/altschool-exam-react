import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";

function useCustom() {
  const [value, setValue] = useState(0);
  const maxValue = 50;
  const handleError = useErrorHandler();

  const increment = () => {
    try {
      if (value >= maxValue) {
        throw new Error("You incremented a number that is more than 50.");
      } else {
        setValue((prevValue) => prevValue + 1);
      }
    } catch (error) {
      handleError(error);
    }
  };
  const decrement = () => setValue((prevValue) => prevValue - 1);
  const reset = () => setValue(0);

  return {
    value,
    increment,
    decrement,
    reset,
    setValue,
    maxValue,
    handleError,
  };
}

export default useCustom;
