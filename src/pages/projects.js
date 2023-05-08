import ProjectItemsMobile from "@/components/ProjectItemsMobile";
import { ProjectCarousel } from "@/components/ProjectCarousel";

const Projects = () => {
  return (
    <div className="h-full">
      <p className="uppercase tracking-[0.5rem] my-10 w-[55%] m-auto text-[#3d81bc] text-xl font-bold ">
        Projects
      </p>
      <div className="lg:hidden">
        <ProjectItemsMobile />
      </div>
      <div className="hidden lg:block ">
        <ProjectCarousel />
      </div>
    </div>
  );
};
export default Projects;
