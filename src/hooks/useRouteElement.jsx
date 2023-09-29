import { useRoutes } from "react-router-dom";
import Login from "../page/Login/Login";
// import Home from "../page/Home/Home";

export default function useRouteElement() {
  const routeElement = useRoutes([
    { path: "login", element: <Login /> },
    { path: "", element: <Login /> },
  ]);
  return routeElement;
}
