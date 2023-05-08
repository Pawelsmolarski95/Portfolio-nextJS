import ProjectItem from "@/components/ProjectItemMobile";
import waveProjectImage from "../../public/images/waveProject.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ProjectItemsDesktop from "@/components/ProjectItemsDesktop";
import ProjectItemsMobile from "@/components/ProjectItemsMobile";
import { ProjectCarousel } from "@/components/ProjectCarousel";

const Projects = () => {
  return (
    <div className="h-full">
      <p className="uppercase tracking-[0.5rem] my-10 w-[55%] m-auto text-[#3d81bc] text-xl font-bold ">
        Projects
      </p>
      <div className="md:hidden">
        <ProjectItemsMobile />
      </div>
      <div className="hidden md:block ">
        <ProjectCarousel />
      </div>
      
    </div>
  );
};
export default Projects;