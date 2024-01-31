import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };

  return (
    <>
      <div className="container">
        <h1>Welcome to the Home Page!</h1>
        <h3>To Show all the product, Please click on below button!</h3>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
};

export default Home;
