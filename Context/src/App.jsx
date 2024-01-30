import React from "react";
import ComC from "./Component/ComC";
import { AuthProvider } from "./Component/Context";

const App = () => {
  // const initname = "khushi";
  // const dynamicName = "Khushi";
  return (
    <>
      <AuthProvider>
        <ComC />
      </AuthProvider>
    </>
  );
};

export default App;
