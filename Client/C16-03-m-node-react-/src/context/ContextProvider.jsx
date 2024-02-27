import { useState } from "react";
import userContext from "./user";

function ContextProvider({ children }) {
  const [token, setToken] = useState("");

  const updateToken = (token) => {
    if (!token) return;
    setToken(token);
  };

  return (
    <userContext.Provider value={{ token, updateToken }}>
      {children}
    </userContext.Provider>
  );
}

export default ContextProvider;
