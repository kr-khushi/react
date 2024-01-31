import React from "react";
import useCounter from "../Custom_Hooks/useCounter";

const Counter = () => {
  const [counter, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      <h1>Count = {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
