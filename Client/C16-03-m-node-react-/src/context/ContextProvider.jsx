import { useState } from "react";
import userContext from "./user";

function ContextProvider({ children }) {
  const [userConfig, setUserConfig] = useState({
    token: "",
    role: "",
  });

  return (
    <userContext.Provider value={{ userConfig, setUserConfig }}>
      {children}
    </userContext.Provider>
  );
}

export default ContextProvider;
