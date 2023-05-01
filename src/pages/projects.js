import Image from "next/image";
import Link from "next/link";
import React from "react";

import adsProjectImage from "../../public/images/adsProject.png";
import foodProjectImage from "../../public/images/foodProject.png";
import travelProjectImage from "../../public/images/travelProject.png";
import waveProjectImage from "../../public/images/waveProject.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import ProjectItem from "../components/ProjectItem"

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
        <div className="grid md:grid-cols-2 gap-2">
          <ProjectItem
            title={"YourAds"}
            image={adsProjectImage}
            urlLink={"/yourads"}
            alt={"ads"}
            techStack={
              "React, Redux, Thunk, React-Bootstrap, Node,Express, MongoDB, MongoAtlas"
            }
          />
          <ProjectItem
            title={"FoodProject"}
            image={foodProjectImage}
            urlLink={"/yourads"}
            alt={"food "}
            techStack={"JavaScript, HTML, SASS, Bootstrap"}
          />
          <ProjectItem
            title={"TravelProject"}
            image={travelProjectImage}
            urlLink={"/yourads"}
            alt={"travel"}
            techStack={"React, Redux, React-Bootstrap, Sass"}
          />
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
        <div className="mt-5 text-center cursor-pointer text-[#3d81bc]">
          <a
            href="https://github.com/Pawelsmolarski95"
            target={"_blank"}
            rel={"noreferrer"}
            passHref={true}
          >
            <h5>See more on my Github</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
