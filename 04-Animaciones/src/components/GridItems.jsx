import { ProjectCard } from "./ProjectCard";
import projectsInfo from '../constants/projectsInfo.json';

export const GridItems = () => {
  return (
    <section className="container mx-auto mt-5 text-center h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          projectsInfo &&
          projectsInfo.map((project) => {
            return (
              <ProjectCard urlProject={project.urlProject} urlGh={project.urlGH} key={project.title} title={project.title} text={project.text} img={`./src/assets/${project.img}`}></ProjectCard>
            )
          })
        }
      </div>
    </section>
  );
};
