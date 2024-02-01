import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  iceordered,
  icerestocked,
} from "../Features/IceCream/IceCreamSlice.js";

const IceCreamComponent = () => {
  const noIceCream = useSelector((state) => state.iceCream.numOfIcecream);
  const dispatch = useDispatch();

  return (
    <>
      <p>Number of Ice Cream - {noIceCream}</p>
      <button onClick={() => dispatch(iceordered())}>Order Ice Cream</button>
      <button onClick={() => dispatch(icerestocked(3))}>
        Restocked IceCream 3
      </button>
    </>
  );
};

export default IceCreamComponent;
