import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [loading, setLoading] = useState();
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/50`)
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Somethong went wrong");
      });
  }, []);

  return (
    <>
      {loading ? "Loading..." : post.title}
      {error ? error : null}
    </>
  );
};

export default DataFetching;
