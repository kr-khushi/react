import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <h1>Product Page</h1>
      <Link to="/product/feature" style={{ margin: "50px" }}>
        Feature
      </Link>
      <Link to="/product/newfeature" style={{ margin: "50px" }}>
        New
      </Link>
      <Outlet />
    </>
  );
};

export default Product;
