import React, { useState } from "react";
import useDocumentTitle from "../Custom_Hooks/useDocumentTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
};

export default DocTitleOne;
