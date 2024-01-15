import { useParallax } from 'react-scroll-parallax';
import Avatar from '../assets/Avatar.svg'
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { SOCIALS } from '../constants/socials';
import { ArrowDown } from '../components/ArrowDown';

export const Home = () => {
  const firstparallax = useParallax({ speed: 1 });
  const secondParallax = useParallax({ speed: 30 })

  return (
    <section className="w-full h-[90vh] flex justify-between items-center gap-20 relative">
      <div ref={firstparallax.ref} className="w-1/2">
        <h2 className="text-alternatyve-500 font-semibold text-3xl mb-1">Desarrollador Front-End</h2>
        <h1 className="text-white font-semibold text-7xl mb-5">Gabriel Funes</h1>
        <h4 className="text-white font-semibold first-letter:text-alternatyve-500 first-letter:text-2xl">Hola, soy un apasionado del desarrollo de software Front-End con experiencia en tecnologías líderes como React y Vue. Mi pasión por mantenerme actualizado en las últimas tendencias del desarrollo Front-End me permite brindar soluciones innovadoras que impulsan la experiencia del usuario.</h4>
        <div className='flex gap-7 mt-7 items-center'>
          <Button>Descargar CV</Button>
          <IconButton socialMedia={SOCIALS.LI}></IconButton>
          <IconButton socialMedia={SOCIALS.GH}></IconButton>
        </div>
      </div>
      <div ref={secondParallax.ref} className="w-1/2 flex justify-end">
        <div className="bg-alternatyve-500/70 w-80 relative h-80 rounded-full backdrop-blur-sm">
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
      <ArrowDown></ArrowDown>
    </section>
  )
}