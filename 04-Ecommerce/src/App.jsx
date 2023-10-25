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
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon
          className="polygon"
          points="70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369"
          style={estilo}
        />
      </svg>
    </>
  );
};
