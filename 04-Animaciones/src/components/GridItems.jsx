import { ProjectCard } from "./ProjectCard"
import BgImage from '../assets/Captura.png'
export const GridItems = () => {
  return (
    <section className="container mx-auto mt-5 text-center h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <ProjectCard title={"Proyecto 1"} text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi omnis a voluptatum tempora minima distinctio laboriosam itaque eaque earum. Repellendus atque iure quisquam, vel voluptatibus dicta quod inventore itaque quidem!"} img={BgImage}></ProjectCard>
        <ProjectCard title={"Proyecto 1"} text={"Este es el primer proyecto"} img={BgImage}></ProjectCard>
        <ProjectCard title={"Proyecto 1"} text={"Este es el primer proyecto"} img={BgImage}></ProjectCard>
        <ProjectCard title={"Proyecto 1"} text={"Este es el primer proyecto"} img={BgImage}></ProjectCard>
        <ProjectCard title={"Proyecto 1"} text={"Este es el primer proyecto"} img={BgImage}></ProjectCard>
        <ProjectCard title={"Proyecto 1"} text={"Este es el primer proyecto"} img={BgImage}></ProjectCard>
      </div>
    </section>
  )
}