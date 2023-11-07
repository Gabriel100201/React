import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import {
  animateAlternatyve,
  animatePolygon,
  animateFull,
} from "./animations/poligons";

export const App = () => {
  useEffect(() => {
    animateFull();
  }, []);
  const estilo = {
    fill: "none",
    stroke: "black",
    strokeWidth: 2,
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {[...Array(9)].map((_, index) => (
            <svg
              key={index}
              width="100"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="polygon"
                points="0,0 100,0 100,100 0,100 0,0"
                style={estilo} // Ajusta el estilo según tus necesidades
              />
            </svg>
          ))}
        </div>
      </div>
    </>
  );
};
