import React, { useState } from "react";

const DataFething = () => {
  const [data, setData] = useState([
    {
      id: 1,
      userName: "Ganesh",
    },
    {
      id: 2,
      userName: "Dinesh",
    },
    {
      id: 3,
      userName: "Somesh",
    },
    {
      id: 4,
      userName: "Avinash",
    },
    {
      id: 5,
      userName: "Ashish",
    },
  ]);

  const handleDelete = (id) => {
    const newData = data.filter((data) => data.id !== id);
    setData(newData);
  };
  return (
    <div>
      <h1>User-List</h1>

      {data.map((data) => (
        <h1>
          {data.id}-{data.userName}
          <button onClick={() => handleDelete(data.id)}>Delete-User</button>
        </h1>
      ))}
    </div>
  );
};

export default DataFething;
