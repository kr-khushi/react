import React, { useState } from "react";

const WithIncrement = (WrappedComponent) => {
  return () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    return <WrappedComponent count={count} onIncrement={handleIncrement} />;
  };
};

export default WithIncrement;
