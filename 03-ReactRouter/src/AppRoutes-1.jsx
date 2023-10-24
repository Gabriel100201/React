import { useRoutes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";

const routes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about/:persona",
    element: <About></About>,
  },
];

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <h1 className="font-bold">React Router</h1>
      {element}
    </>
  );
}

export default App;
