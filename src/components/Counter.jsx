import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div
      style={{
        border: "4px solid pink",
      }}
    >
      <p>{count}</p>
      <button
        style={{
          background: "black",
          color: "white",
          width: "40px",
          height: "50px",
          border: "none",
        }}
        onClick={increase}
      >
        +
      </button>
      <button
        style={{
          background: "red",
          color: "white",
          width: "40px",
          height: "50px",
          marginLeft: "20px",
          border: "none",
        }}
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
