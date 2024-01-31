import React, { useEffect, useRef, useState } from "react";

const Hook_useRef = () => {
  const [timer, setTImer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTImer((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
    focusPoint.current.focus();
  };

  return (
    <div>
      Hooks - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>Click on the action button to focus and populate the text.</label>
      <br />
      <textarea ref={focusPoint} />
    </div>
  );
};

export default Hook_useRef;
