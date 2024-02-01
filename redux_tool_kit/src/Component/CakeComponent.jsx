import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../Features/Cakes/CakeSlice";

const CakeComponent = () => {
  const noCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <>
      <p>Number of Cakes - {noCake} </p>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restocked Cake 3</button>
    </>
  );
};

export default CakeComponent;
