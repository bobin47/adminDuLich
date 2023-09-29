import { useRoutes } from "react-router-dom";
import Login from "../page/Login/Login";
// import Home from "../page/Home/Home";

// function ProtectedRoute() {
//   const isAuthenticated = window.localStorage.getItem("user");
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// }

function RejectRoute() {
  const isAuthenticated = window.localStorage.getItem("user");
  return !isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
}

// function IsAdmin() {
//   const data = JSON.parse(localStorage.getItem("user") || "{}");
//   return data ? <Outlet /> : <Navigate to="/" />;
// }

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <RejectRoute />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        
      ],
    },
    // { path: "", element: <Login /> },
    // { path: "/login", element: <Login /> },
  ]);
  return routeElement;
}
