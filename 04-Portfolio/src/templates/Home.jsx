import { useParallax } from 'react-scroll-parallax';
import Avatar from '../assets/Yo.png'
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
      <div ref={firstparallax.ref} className="md:w-full flex flex-col items-start md:items-start">
        <h2 className="text-alternatyve-500 text-start font-semibold text-md md:text-3xl mb-1">Desarrollador Full-Stack</h2>
        <h1 className="text-white font-semibold text-7xl md:text-7xl mb-5 text-start md:text-start block sm:hidden md:block">Gabriel Funes</h1>
        <div className='hidden sm:flex md:hidden justify-between mb-7 items-center gap-3'>
          <h1 className="text-white font-semibold text-5xl text-start w-1/3">Gabriel Funes</h1>
          <div className="bg-alternatyve-500/70 w-36 h-36 hidden sm:flex md:hidden justify-center items-center rounded-full backdrop-blur-md">
            <img src={Avatar} alt="Avatar" className='rounded-full h-full grayscale w-full' />
          </div>
        </div>
        <h4 className="text-white font-semibold text-md first-letter:text-alternatyve-500 first-letter:text-2xl">Hola, soy un apasionado del desarrollo de software Full Stack con experiencia en tecnologías líderes como React, Vue, Node.js y MySQL. Mi pasión por mantenerme actualizado en las últimas tendencias del desarrollo Full Stack me permite brindar soluciones innovadoras que impulsan la experiencia del usuario y optimizan el rendimiento del sistema.</h4>
        <div className='flex gap-7 mt-7 items-center'>
          <a href="/GabrielFunesCV.pdf" target='_blank'>
            <Button>Descargar CV</Button>
          </a>
          <a href="https://www.linkedin.com/in/gabriel-funes-developer/" target='_blank' rel="noreferrer">
            <IconButton socialMedia={SOCIALS.LI}></IconButton>
          </a>
          <a href="https://github.com/Gabriel100201" target='_blank' rel="noreferrer">
            <IconButton socialMedia={SOCIALS.GH}></IconButton>
          </a>
        </div>
      </div>
      <div ref={secondParallax.ref} className="hidden md:flex md:w-full justify-end">
        <div className="bg-alternatyve-500/70 w-64 h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 relative rounded-full backdrop-blur-md">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-full h-full rounded-full absolute filter grayscale opacity-0 transition-opacity ease-in duration-500 group-hover:opacity-100"
            onLoad={(e) => {
              e.target.classList.add('opacity-100');
            }}
          />
        </div>
      </div>
    </section>
  )
}