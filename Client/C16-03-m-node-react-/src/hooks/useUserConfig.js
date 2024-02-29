import { useContext } from "react";
import userContext from "../context/user";

function useUserConfig() {
  const { userConfig, setUserConfig } = useContext(userContext);
  const { token, role } = userConfig;

  const setConfig = (newToken, newRole) => {
    setUserConfig({
      token: newToken || token,
      role: newRole || role,
    });
  };

  const clearConfig = () => {
    setUserConfig({
      token: "",
      role: "",
    });
  };

  return { token, role, setConfig, clearConfig };
}

export default useUserConfig;
