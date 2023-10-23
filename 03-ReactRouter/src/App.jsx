import { Routes, Route, Link, useParams } from "react-router-dom";
function App() {
  const Home = () => {
    return (
      <>
        <div className="flex w-32 flex-col">
          <Link to="/about/persona1">Redirect</Link>
          <span>Home</span>
        </div>
      </>
    );
  };
  const About = () => {
    const { persona } = useParams();
    return (
      <>
        <div className="flex w-32 flex-col">
          <Link to="/">Redirect</Link>
          <span>About of: {persona}</span>
        </div>
      </>
    );
  };

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
