import "./App.css";
import { useEffect } from "react";
import useUserConfig from "./hooks/useUserConfig";
import Routes from "./routes";

function MainContainer() {
  const { setConfig } = useUserConfig();

  useEffect(() => {
    const consult = localStorage.getItem("user");
    if (consult) {
      const { token, userRole } = JSON.parse(consult);
      setConfig(token, userRole);
    }
  }, []);

  return <Routes />;
}

export default MainContainer;
