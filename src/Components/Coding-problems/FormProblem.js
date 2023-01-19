import React, { useState } from "react";

const FormProblem = () => {
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Type your Name"
          name="name"
          type="text"
          onChange={changeHandler}
        />
        <input
          placeholder="Type your Mo.Number"
          name="name"
          type="number"
          onChange={changeHandler}
        />
        <input
          placeholder="Date"
          name="date"
          type="date"
          onChange={changeHandler}
        />

        <input type="submit" />
        <input type="reset" />
      </form>
      {/* <input type="submit" onSubmit={onSubmitHandler} /> */}
    </div>
  );
};

export default FormProblem;
