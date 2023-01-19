import React, { useState } from "react";

const DigitalClock = () => {
  const time = new Date().toLocaleTimeString();

  const [times, setTime] = useState(time);

  const handleSet = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(handleSet, 1000);

  return (
    <>
      <h1>{times}</h1>

      {/* <button onClick={handleSet}>set-time</button> */}
    </>
  );
};

export default DigitalClock;
