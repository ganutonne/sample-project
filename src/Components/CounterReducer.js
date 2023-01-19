import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state + 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>Count={count}</h3>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>X</button>
    </>
  );
};

export default CounterReducer;
