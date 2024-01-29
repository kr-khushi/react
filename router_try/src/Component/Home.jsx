import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to the Home Page!</h1>
      <button onClick={() => navigate("order")}>Place Order</button>
    </>
  );
};

export default Home;
