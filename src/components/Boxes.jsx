import React from "react";

const Boxes = ({ backgroundColor, width, height }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
    ></div>
  );
};

export default Boxes;
