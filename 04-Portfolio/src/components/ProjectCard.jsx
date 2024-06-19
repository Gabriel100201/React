import { SOCIALS } from "../constants/socials";
import { IconButton } from "./IconButton";
import { FaExternalLinkAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const ProjectCard = ({ title, text, img, urlProject, urlGh }) => {
  const backgroundImageUrl = `url(${img})`;

  return (
    <div className="h-96 rounded-lg relative overflow-hidden group select-none">
      <a href={urlProject} className="cursor-pointer">
        <div
          className="h-full w-full bg-cover brightness-[.4] scale-110 xl:scale-100 xl:brightness-75 group-hover:brightness-[.4] bg-center bg-no-repeat transition-all duration-300 transform group-hover:scale-110 group-hover:blur-[1px]"
          style={{
            backgroundImage: backgroundImageUrl
          }}
          >
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-7 text-white opacity-100">
          <div className="flex flex-col justify-start">
            <h3 className="text-3xl xl:text-4xl font-semibold text-center xl:text-start mb-2">{title}</h3>
            <p className="text-md text-start font-semibold opacity-100 xl:opacity-0 group-hover:opacity-100 mt-5 overflow-hidden max-h-[12em] transition-all line-clamp-[10]" >{text}</p>
          </div>
        </div>
      </a>
      <div className="absolute">
          {
            urlGh && (urlGh != "private") && (
              <a href={urlGh} target="_blank" className="" rel="noreferrer">
                <IconButton socialMedia={SOCIALS.GH}></IconButton>
              </a>
            )
          }
        </div>
    </div>

  );
};
