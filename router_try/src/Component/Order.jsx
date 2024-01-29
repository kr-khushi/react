import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Order Placed!!!</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default Order;
