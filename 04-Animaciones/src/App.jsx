import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import {
  animatePolygon,
  animateFull,
  animateColor,
} from "./animations/poligons";
import { BackGround } from "./components/Bg";
import { Home } from "./templates/Home";
import { ParallaxProvider } from "react-scroll-parallax";

export const App = () => {
  useEffect(() => {
    animateFull();
    setTimeout(() => {
      animatePolygon()
    }, [500])
    /* setTimeout(() => {
      animateColor()
    }, [4000]) */
  }, [BackGround]);
  return (
    <>
      <ParallaxProvider>
        <div className="z-30 h-32 w-full absolute px-96">
          <Navbar></Navbar>
          <Home></Home>
          <Home></Home>
        </div>
        <BackGround></BackGround>
      </ParallaxProvider>
    </>
  );
};
