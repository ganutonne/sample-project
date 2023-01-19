import React from "react";

const Problem3props = ({ name, changeState, isName }) => {
  return (
    <>
      <h1>{name}</h1>
      {isName}
      <button onClick={() => changeState("Ganesh")}>changeState</button>
    </>
  );
};

export default Problem3props;
