import React from "react";
import WithIncrement from "./WithIncrement";

const HoverIncrement = ({ count, onIncrement }) => {
  return (
    <>
      <p onMouseOver={onIncrement}>Increment {count}</p>
    </>
  );
};

export default WithIncrement(HoverIncrement);
