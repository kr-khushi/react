import React, { useContext } from "react";
import ComE from "./ComE";
import { AuthContext, useAuthContext } from "./Context";

const ComC = () => {
  const ctx = useAuthContext();
  return (
    <div>
      <ComE />
      <p>{ctx.name}</p>
    </div>
  );
};

export default ComC;
