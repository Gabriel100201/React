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
import Avatar from './assets/Avatar.svg'
import { ArrowDown } from './components/ArrowDown';
import { Projects } from "./templates/Projects";

export const App = () => {
  /* useEffect(() => {
    animateFull();
    setTimeout(() => {
      animatePolygon()
    }, [500])
  }, [BackGround]) */

  return (
    <>
      <ParallaxProvider>
        <div className="z-30 h-32 w-full absolute px-12 sm:px-32 md:px-36 lg:px-32 xl:px-48 2xl:px-96">
          <img src={Avatar} alt="Avatar" className='sm:hidden absolute w-9 top-5 right-5' />
          <Navbar></Navbar>
          <Home></Home>
          <div className="w-full flex justify-center mt-10">
            <ArrowDown></ArrowDown>
          </div>
          <Projects></Projects>
        </div>
        <BackGround></BackGround>
      </ParallaxProvider>
    </>
  );
};
