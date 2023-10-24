import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="flex w-32 flex-col">
        <Link to="/about/persona1">Redirect</Link>
        <span>Home</span>
      </div>
    </>
  );
};
