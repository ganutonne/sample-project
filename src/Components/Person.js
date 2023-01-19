import React from "react";

function Person({ data }) {
  return (
    <div>
      <h1>
        I am {data.name}. lives in {data.city}
      </h1>
    </div>
  );
}

export default Person;
