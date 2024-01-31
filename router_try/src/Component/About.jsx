import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <>
      <h1>Welcome to the {location.pathname.replace("/", "")} Page!</h1>
    </>
  );
};

export default About;
