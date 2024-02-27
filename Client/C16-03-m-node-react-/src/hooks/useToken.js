import { useContext } from "react";
import userContext from "../context/user";

function useToken() {
  const { token, updateToken } = useContext(userContext);

  return { token, updateToken };
}

export default useToken;
