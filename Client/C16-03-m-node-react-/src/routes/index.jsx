import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardClient from "../views/DashboardClient";
import DashboardVisitor from "../views/DashboardVisitor";
import Landing from "../views/Landing";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/dashboard-client", element: <DashboardClient /> },
  { path: "/dashboard-user", element: <DashboardVisitor /> },
]);

const MyRoutes = () => {
  return (
   <RouterProvider router={router} />
  );
};

export default MyRoutes;
