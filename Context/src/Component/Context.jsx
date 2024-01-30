import React, { createContext, useContext, useState } from "react";

//create context
const AuthContext = createContext();

//create a provider
const AuthProvider = ({ children }) => {
  const [name, setName] = useState("Hello World");
  

  const contextValue = { name ,setName};

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext=()=>{
  const ctx=useContext(AuthContext);
  return ctx;
}
export { AuthContext, AuthProvider };
