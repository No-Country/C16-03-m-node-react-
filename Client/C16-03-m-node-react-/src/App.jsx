import "./App.css";
import Login from "./components/login/Login";
import DashboardClient from "./views/DashboardClient";
import Landing from "./views/Landing";

function MainContainer() {
  return (
    <>
      <Landing />
      <DashboardClient />
    </>
  );
}

export default MainContainer;
