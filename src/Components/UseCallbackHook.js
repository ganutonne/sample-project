import React, { useMemo, useState } from "react";

const UseCallbackHook = () => {
  const [counterOne, setCountOne] = useState(1);
  const [countTwo, setCountTwo] = useState(1);

  const incrementCountOne = () => {
    setCountOne((prevState) => {
      return prevState + 1;
    });
  };
  const incrementCountTwo = () => {
    setCountTwo((prevState) => {
      return prevState + 1;
    });
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 == 0;
  }, [counterOne]);

  return (
    <>
      <div>
        Count = {counterOne}
        <button onClick={incrementCountOne}>incrementCount</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        Count = {countTwo}
        <button onClick={incrementCountTwo}>incrementCount</button>
      </div>
    </>
  );
};

export default UseCallbackHook;
