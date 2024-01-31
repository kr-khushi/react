import React, { useEffect, useState } from "react";

const GreetingBox = ({ getGreeting }) => {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    setGreeting(getGreeting);
    console.log("Greeting useEffect");
  }, [getGreeting]);
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default GreetingBox;
