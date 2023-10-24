import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {
  return (
    <>
      <h1 className="font-bold">React Router</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/:persona" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
