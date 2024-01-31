import React, { useCallback } from "react";
import { useState } from "react";
import GreetingBox from "./GreetingBox";

const Callback = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const getGreeting = useCallback(() => {
    return `Hello ${name}`;
  }, [name]);

  return (
    <div>
      <div className="App">
        <input
          placeholder="Enter Your Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <GreetingBox getGreeting={getGreeting} />
        {count}

        <button onClick={() => setCount(count + 1)}>increment by 1</button>
      </div>
    </div>
  );
};

export default Callback;
