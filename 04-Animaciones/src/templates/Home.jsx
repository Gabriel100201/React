import { useParallax } from 'react-scroll-parallax';
import Avatar from '../assets/Avatar.svg'
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { SOCIALS } from '../constants/socials';
import { ScrollContext } from '../context/refs';
import { useContext } from 'react';

export const Home = () => {
  const firstparallax = useParallax({ speed: 1 });
  const secondParallax = useParallax({ speed: 30 })
  const { sobreMiRef } = useContext(ScrollContext)

  return (
    <section ref={sobreMiRef} className="w-full h-auto  flex flex-col md:flex-row justify-between items-center gap-20 relative pt-32 sm:pt-32 md:pt-48 lg:pt-28 xl:pt-28 2xl:pt-60">
      <div ref={firstparallax.ref} className="md:w-1/2 flex flex-col items-start md:items-start">
        <h2 className="text-alternatyve-500 text-start font-semibold text-md md:text-3xl mb-1">Desarrollador Front-End</h2>
        <h1 className="text-white font-semibold text-7xl md:text-7xl mb-5 text-start md:text-start block sm:hidden md:block">Gabriel Funes</h1>
        <div className='hidden sm:flex md:hidden justify-between mb-7 items-center gap-3'>
          <h1 className="text-white font-semibold text-5xl text-start">Gabriel Funes</h1>
          <div className="bg-alternatyve-500/70 w-36 hidden sm:flex md:hidden justify-center items-center h-36 rounded-full backdrop-blur-md">
            <img src={Avatar} alt="Avatar" className='flex w-20' />
          </div>
        </div>
        <h4 className="text-white font-semibold text-md first-letter:text-alternatyve-500 first-letter:text-2xl">Hola, soy un apasionado del desarrollo de software Front-End con experiencia en tecnologías líderes como React y Vue. Mi pasión por mantenerme actualizado en las últimas tendencias del desarrollo Front-End me permite brindar soluciones innovadoras que impulsan la experiencia del usuario.</h4>
        <div className='flex gap-7 mt-7 items-center'>
          <Button>Descargar CV</Button>
          <IconButton socialMedia={SOCIALS.LI}></IconButton>
          <IconButton socialMedia={SOCIALS.GH}></IconButton>
        </div>
      </div>
      <div ref={secondParallax.ref} className="hidden md:flex md:w-1/2 justify-end">
        <div className="bg-alternatyve-500/70 w-80 relative h-80 rounded-full backdrop-blur-md">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-full h-full absolute bottom-10 opacity-0 transition-opacity ease-in duration-500 group-hover:opacity-100"
            onLoad={(e) => {
              e.target.classList.add('opacity-100');
            }}
          />
        </div>
      </div>
    </section>
  )
}