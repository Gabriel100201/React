import { SOCIALS } from "../constants/socials";
import { IconButton } from "./IconButton";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ title, text, img, urlProject, urlGh }) => {
  const backgroundImageUrl = `url(${img})`;

  return (
    <div className="h-96 rounded-lg relative overflow-hidden group hover:cursor-pointer select-none">
      <div
        className="h-full w-full bg-cover brightness-75 group-hover:brightness-[.4] bg-center bg-no-repeat transition-all duration-300 transform scale-100 group-hover:scale-110 group-hover:blur-[1px]"
        style={{
          backgroundImage: backgroundImageUrl
        }}
      >
      </div>
      <div className="absolute inset-0 flex flex-col justify-between p-7 text-white opacity-100">
        <div className="flex flex-col justify-start">
          <h3 className="text-4xl font-semibold text-start mb-2">{title}</h3>
          <p className="text-md text-start opacity-100 xl:opacity-0 group-hover:opacity-100 overflow-hidden max-h-[12em] transition-all">{text}</p>
        </div>
        <div className="flex justify-end">
          <a href={urlGh} target="_blank">
            <IconButton socialMedia={SOCIALS.GH}></IconButton>
          </a>
        </div>
      </div>
      <a href={urlProject} target="_blank">
        <div className="z-50 absolute top-5 right-5">
          <FaExternalLinkAlt className="text-primary-50 text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>
    </div>
  );
};
