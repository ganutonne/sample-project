import React, { useState } from "react";

const Problem1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsNotVisible] = useState(false);

  const changeState = () => {
    setCount(count + 1);
    setName("Ganesh");
    setIsNotVisible(!isVisible);
  };

  return (
    <>
      <h1>{count}</h1>
      {isVisible ? <h1>Visible</h1> : <h1>Not-visible</h1>}
      <h1>{name}</h1>

      <button onClick={changeState}>channgeState</button>
    </>
  );
};

export default Problem1;
