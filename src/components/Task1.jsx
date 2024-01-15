import React, { useState } from "react";

const Task1 = () => {
  const [state, setState] = useState("Hello");
  const changeS = (e) => {
    setState(e.target.value);
  };
  return (
    <div>
      <h1>{state}</h1>
      <input value={state} onChange={changeS} type="text" />
    </div>
  );
};

export default Task1;
