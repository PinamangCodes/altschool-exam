import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import { reducer } from "../hooks/reducer";

function CounterOne() {
  const [count, dispatch] = useCounter(reducer, 0);
  const [input, setInput] = useState("");

  const handleSet = () => {
    dispatch({ type: "set", payload: Number(input) });
    setInput("");
  };

  return (
    <div>
      <h1>Counter One-custom hook</h1>
      <div>Count- {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={handleSet}>Set</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterOne;
