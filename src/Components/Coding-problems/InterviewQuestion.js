import React, { useEffect, useState } from "react";

const InterviewQuestion = () => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  //   useEffect(() => {
  //     const n = nums.length > 4;
  //     setNums(n);
  //   }, []);
  console.log(nums);
  return (
    <div>
      {nums.map((n, index) => {
        if (index > 4) return <h1>{n}</h1>;
      })}
    </div>
  );
};

export default InterviewQuestion;
