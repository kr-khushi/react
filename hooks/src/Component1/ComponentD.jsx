import React, { useContext } from "react";
import { countContext } from "../App";

const ComponentD = () => {
  const countCtx = useContext(countContext);

  return (
    <div>
      Component D
      <button onClick={() => countCtx.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countCtx.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countCtx.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentD;
