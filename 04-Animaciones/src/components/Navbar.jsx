export const Navbar = () => {
  return (
    <div className="absolute mt-5 gap-7 px-5 opacity-90 backdrop-filter flex justify-between items-center backdrop-blur-md shadow-2xl left-1/2 transform -translate-x-1/2 h-10 bg-gradient-to-b from-gray-900 to-gray-950 rounded-full">
      <div className="relative">
        <button className="text-gray-100 font-medium after:bg-primary-200 after:rounded-full after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer" href="">Experiencia</button>
      </div>
      <div className="relative">
        <button className="text-gray-100 font-medium after:bg-primary-200 after:rounded-full after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer" href="">Proyectos</button>
      </div>
      <div className="relative">
        <button className="text-gray-100 font-medium after:bg-primary-200 after:rounded-full after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer" href="">Sobre mí</button>
      </div>
      <div className="relative">
        <button className="text-gray-100 font-medium after:bg-primary-200 after:rounded-full after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer" href="">Contacto</button>
      </div>
    </div>
  );
};
