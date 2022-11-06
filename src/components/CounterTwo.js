import React, { useReducer, useState } from "react";
import { reducer } from "../hooks/reducer";

function CounterTwo() {
  const initialState = 0;
  const [count, dispatch] = useReducer(reducer, initialState);

  const [input, setInput] = useState("");

  const handleSet = () => {
    dispatch({ type: "set", payload: Number(input) });
    setInput("");
  };

  return (
    <div>
      <h1>Counter Two-useReducer</h1>
      <div>Count- {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={handleSet}>Set</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
