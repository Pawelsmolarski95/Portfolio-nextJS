import { Projects } from "@/data/db";
import ProjectItemMobile from "./ProjectItemMobile";

const ProjectItemsMobile = () => {
  return (
    <>
      {Projects.map((project) => (
        <ProjectItemMobile
          src={project.src}
          alt={project.alt}
          url={project.url}
          name={project.name}
          data={project.data}
          description={project.description}
        />
      ))}
    </>
  );
};

export default ProjectItemsMobile;
