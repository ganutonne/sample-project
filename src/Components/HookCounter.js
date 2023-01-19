import React, { useState } from "react";

function HookCounter() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const incrementCountByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <h1>Count -{count}</h1>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>++</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>--</button>
      <button onClick={incrementCountByFive}>+5</button>
    </>
  );
}

export default HookCounter;
