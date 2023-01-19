import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case  "increment":
      return state + 1;
    case "decrement":
      return state + 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReducer3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  return (
    <>
      <h3>Count={count}</h3>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>X</button>
      <br />
      <h3>Count={count2}</h3>
      <button onClick={() => dispatch2("increment")}>+</button>
      <button onClick={() => dispatch2("decrement")}>-</button>
      <button onClick={() => dispatch2("reset")}>X</button>
    </>
  );
};

export default CounterReducer3;
