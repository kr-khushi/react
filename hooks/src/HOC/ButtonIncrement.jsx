import React from "react";
import WithIncrement from "./WithIncrement";

const ButtonIncrement = ({ count, onIncrement }) => {
  return (
    <>
      <button onClick={onIncrement}>Increment {count}</button>
    </>
  );
};

export default WithIncrement(ButtonIncrement);
