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
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {state}
      <button onClick={() => dispatch("increment")}>++</button>
      <button onClick={() => dispatch("decrement")}>--</button>
      <button onClick={() => dispatch("reset")}>X</button>
    </>
  );
};

export default Reducer;
