import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import {
  animatePolygon,
  animateFull,
} from "./animations/poligons";
import { BackGround } from "./components/Bg";

export const App = () => {
  useEffect(() => {
    animateFull();
    setTimeout(() => {
      animatePolygon()
    }, [500])
  }, [BackGround]);
  return (
    <>
      <div className="z-30 h-32 w-full absolute px-32 py-32">
        <h1 className="text-white font-mono font-semibold text-3xl">Gabriel Funes</h1>
      </div>
      <BackGround></BackGround>
    </>
  );
};
