import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/" style={{ margin: "50px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "50px" }}>
          About
        </Link>
        <Link to="/product" style={{ margin: "50px" }}>
          Product
        </Link>
        <Link to="/profile" style={{ margin: "50px" }}>
          Profile
        </Link>
      </nav>
    </>
  );
};

export default Nav;
