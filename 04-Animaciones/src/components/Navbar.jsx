import { GrValidate } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useContext } from "react";
import { ScrollContext } from "../context/refs";
import { animateScroll as scroll } from 'react-scroll';

export const Navbar = () => {
  const { sobreMiRef, experienciaRef, } = useContext(ScrollContext)

  const scrollToRef = (ref) => {
    if (ref.current) {
      scroll.scrollTo(ref.current.offsetTop - 200, {
        duration: 500,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <div className="fixed z-50 mt-5 w-auto gap-10 sm:gap-7 px-7 opacity-90 backdrop-filter flex justify-between items-center backdrop-blur-md shadow-2xl left-1/2 transform -translate-x-1/2 h-12 bg-gradient-to-b from-gray-900 to-gray-950 rounded-full bottom-3 sm:bottom-auto sm:top-1">
      <div className="relative">
        <button onClick={() => scrollToRef(experienciaRef)} className="text-gray-100 font-medium after:bg-primary-200 after:rounded-full after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer sm:block hidden" href="">Experiencia</button>
        <button className="block sm:hidden">
          <GrValidate color="#fff" className="text-2xl active:bg-white" />
        </button>
      </div>
      <div className="relative">
        <button className="text-gray-100 font-medium after:bg-primary-200 after:rounded-full after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer sm:block hidden" href="">Proyectos</button>
        <button className="block sm:hidden">
          <GoProject color="#fff" className="text-2xl active:bg-white" />
        </button>
      </div>
      <div className="relative whitespace-nowrap">
        <button onClick={() => scrollToRef(sobreMiRef)} className="text-gray-100 font-medium after:bg-primary-200 after:rounded-full after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer sm:block hidden" href="">Sobre mí</button>
        <button className="block sm:hidden">
          <FaUser color="#fff" className="text-2xl active:bg-white" />
        </button>
      </div>
      <div className="relative">
        <button className="text-gray-100 font-medium after:bg-primary-200 after:rounded-full after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer sm:block hidden" href="">Contacto</button>
        <button className="block sm:hidden">
          <IoMdMail color="#fff" className="text-2xl active:bg-white" />
        </button>
      </div>
    </div>
  );
};
