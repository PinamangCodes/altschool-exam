import { useState } from "react";

function useCounter(reducer, initialState) {
  const [count, setCount] = useState(initialState);

  function dispatch(action) {
    let nextCount = reducer(count, action);
    setCount(nextCount);
  }
  return [count, dispatch];
}

export default useCounter;