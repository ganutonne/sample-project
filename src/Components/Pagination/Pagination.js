import React, { useEffect, useState } from "react";
import "./pagination.css"

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    console.log(data);
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  const selectHandler = (selectedPage) => {
    setPage(selectedPage);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Pagination</h1>
      {/* if() */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.slice(page * 10 - 10, page * 10).map((prod, i) => {
          return (
            <span key={prod + i}>
              <img src={prod.thumbnail} />
            </span>
          );
        })}
      </div>

      <div>
        <span style={{ padding: 20, border: "1px solid black" }}>👉</span>
        {[...Array(products.length / 10)].map((_, i) => {
          return (
            <span
              className={page === i + 1 ? "selected" : ""}
              onClick={() => selectHandler(i + 1)}
              style={{
                pointer: "cursor",
                padding: 20,
                border: "1px solid black",
              }}
              key={i}
            >
              {i + 1}
            </span>
          );
        })}
        <span style={{ padding: 20, border: "1px solid black" }}>👈</span>
      </div>
    </>
  );
};

export default Pagination;
