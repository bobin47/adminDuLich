import { useRoutes } from "react-router-dom";
import Login from "../page/Login/Login";
// import Home from "../page/Home/Home";

export default function useRouteElement() {
  const routeElement = useRoutes([
    { path: "", element: <Login /> },
    { path: "/login", element: <Login /> },
  ]);
  return routeElement;
}
