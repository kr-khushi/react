import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>Welcome to the {location.pathname} Page!</h1>

      <button onClick={() => navigate("order")}>Place Order</button>
    </>
  );
};

export default Home;
