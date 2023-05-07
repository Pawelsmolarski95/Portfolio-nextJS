import Image from "next/image";
import Link from "next/link";
import React from "react";

import adsProjectImage from "../../public/images/adsProject.png";
import foodProjectImage from "../../public/images/foodProject.png";
import travelProjectImage from "../../public/images/travelProject.png";
import waveProjectImage from "../../public/images/waveProject.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import ProjectItem from "../components/ProjectItem.js"

const Projects = () => {
  return (
    <div id="projects" className="w-[100%] h-full ">
      <div
        data-aos="fade-left"
        className="max-w-[1240px]    m-auto bg-transparent p-12"
      >
        <p className="uppercase tracking-[0.5rem] my-4 text-[#3d81bc] text-xl font-bold ">
          Projects
        </p>
        <div className="w-full h-full">
         
          <ProjectItem
            title={"WaveProject"}
            image={waveProjectImage}
            urlLink={"/yourads"}
            alt={"book concerts"}
            techStack={
              "React, Redux, Router, Thunk, Sass, Node, Express, MongoDB"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
