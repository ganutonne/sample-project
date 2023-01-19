import React from "react";

const CenteredDiv = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"cadetblue",
        height:"100vh"
      }}
      className="app"
    >
      <h1 style={{backgroundColor:"cyan",}}>Center Me</h1>
    </div>
  );
};

export default CenteredDiv;
