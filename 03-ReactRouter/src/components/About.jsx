import { Link, useParams } from "react-router-dom";

export const About = () => {
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
