// import React from "react";

// function ListRendering() {
//   const names = ["Ganesh", "Dinesh", "Somesh"];
//   const nameList = names.map((name,index) => <h1 key={index}>{index}  {name}</h1>);

//   return <div>{nameList}</div>;
// }

// export default ListRendering;

import React from "react";

import Person from "./Person";

function ListRendering() {
  const person = [
    {
      name: "ganesh",
      age: 25,
      city: "pune",
    },
    {
      name: "dinesh",
      age: 22,
      city: "delhi",
    },
    {
      name: "Somesh",
      age: 20,
      city: "Degloor",
    },
  ];
  const personList = person.map((data) => (
    <Person key={person.name} data={data} />
  ));
  return <div>{personList}</div>;
}

export default ListRendering;
