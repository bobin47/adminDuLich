import useRouteElement from "./hooks/useRouteElement";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  const routeElement = useRouteElement();
  return <div>{routeElement}</div>;
}

export default App;
