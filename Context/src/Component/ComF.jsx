import React, { useContext, useRef } from "react";
import { AuthContext } from "./Context";

const ComF = () => {
  const { name, setName } = useContext(AuthContext);
  const nameRef = useRef("");
  const handleCHangeName = (e) => {
  
    setName(nameRef.current.value);
  };
  return (
    <div>
      <h1>Component F {name}</h1>
      <input type="text" ref={nameRef} />
      <button onClick={handleCHangeName}>CHange Name </button>
    </div>
  );
};

export default ComF;
