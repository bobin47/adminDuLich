import { useRoutes } from "react-router-dom";
import Login from "../page/Login/Login";

export default function useRouteElement() {
  const routeElement = useRoutes([{ path: "login", element: <Login></Login> }]);
  return routeElement;
}
