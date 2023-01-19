import React, { useState } from "react";

const HookCOunter2 = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items, //for merging the objects
      { id: items.length, value: Math.floor(Math.random() * 10) + 10 },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </div>
  );
};

export default HookCOunter2;
