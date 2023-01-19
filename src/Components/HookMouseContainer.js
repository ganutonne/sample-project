import React, { useState } from "react";
import HookCounter4 from "./HookCounter4";

function HookMouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <HookCounter4 />}
    </div>
  );
}

export default HookMouseContainer;
