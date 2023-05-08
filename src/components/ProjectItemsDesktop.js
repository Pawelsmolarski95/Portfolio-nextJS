import React from "react";
import { Projects } from "@/data/db";
import ProjectItemDesktop from "./ProjectItemDesktop";

const ProjectItemsDesktop = () => {
  return (
    <div className="flex row w-full gap-6 ">
          {Projects.map((project) => (
            <ProjectItemDesktop
              src={project.src}
              alt={project.alt}
              url={project.url}
              name={project.name}
              data={project.data}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
  );
};

export default ProjectItemsDesktop;
