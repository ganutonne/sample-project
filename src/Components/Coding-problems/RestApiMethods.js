import axios from "axios";
import React, { useEffect, useState } from "react";

const RestApiMethods = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const postData = () => {
    axios
      .post("https://63be26cee348cb076209f363.mockapi.io/users", {
        id: 1,
        name: name,
        age: 25,
        city: "pune",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(postData);
  };

  const updateData = (id) => {
    axios
      .put(`https://63be26cee348cb076209f363.mockapi.io/users/${id}`, {
        id: 1,
        name: name,
        age: 25,
        city: "pune",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
    console.log(id);
  };
  const deleteData = (id) => {
    axios
      .delete(`https://63be26cee348cb076209f363.mockapi.io/users/${id}`)
      .then((res) => {
        // console.log(res.data);
        getData();
      })
      .catch((err) => {
        console.err(err);
      });
    console.log(id);
  };
  const getData = () => {
    axios
      .get("https://63be26cee348cb076209f363.mockapi.io/users")

      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    axios
      .get("https://63be26cee348cb076209f363.mockapi.io/users")

      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <button onClick={postData}>post-data</button>

      {users.map((user, index) => {
        return (
          <>
            <h1 key={user.index}>
              {user.id}-{user.name}
            </h1>
            <button onClick={() => updateData(user.id)}>Update</button>
            <button onClick={() => deleteData(user.id)}>delete</button>
          </>
        );
      })}
    </div>
  );
};

export default RestApiMethods;
