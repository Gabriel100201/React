import { useContext } from 'react'
import { Button } from '../components/Button'
import info from '../constants/experienceInfo.json'
import { ScrollContext } from '../context/refs'
import { useParallax } from 'react-scroll-parallax';

export const Experience = () => {
  const { experienciaRef } = useContext(ScrollContext)
  const parallax = useParallax({ speed: 10 })
  return (
    <section ref={experienciaRef} className="w-full mt-36">
      <h2 className="text-5xl text-primary-50 font-semibold mb-16">Experiencia</h2>
      <ol ref={parallax.ref} className="relative border-s border-gray-200 dark:border-gray-700">
        {
          info &&
          info.map((item, index) => {
            return (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-semibold leading-none text-alternatyve-400 dark:text-gray-500">{item.date}</time>
                <h3 className="text-lg font-semibold text-primary-50 dark:text-white">{item.title}</h3>
                <p className="mb-4 text-base font-normal text-primary-200 dark:text-gray-400">{item.text}</p>
                <Button secondary size={"sm"}>
                  <a href={item.url} className='w-auto' target='_blank'>
                    Ver más
                  </a>
                </Button>
              </li>
            )
          })
        }
      </ol>
    </section>
  )
}