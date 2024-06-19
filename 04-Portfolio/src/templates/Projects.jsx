import { useContext } from "react"
import { GridItems } from "../components/GridItems"
import { ScrollContext } from "../context/refs"

export const Projects = () => {
  const { proyectosRef } = useContext(ScrollContext)

  return (
    <section ref={proyectosRef} className="w-full mt-40">
      <h2 className="text-4xl md:text-5xl text-primary-50 font-semibold mb-12 md:mb-16">Proyectos</h2>
      <GridItems></GridItems>
    </section>
  )
}