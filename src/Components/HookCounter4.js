import React, { useEffect, useState } from "react";

function HookCounter4() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const changeDegree = (e) => {
    console.log("mouse move");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect call");
    window.addEventListener("mousemove", changeDegree);

    return () => {
      window.removeEventListener("mousemove", changeDegree);
    };
  }, []);
  return (
    <div>
      X-{x} Y-{y}
    </div>
  );
}

export default HookCounter4;
