import "./App.css";

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
