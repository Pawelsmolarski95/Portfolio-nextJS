import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import adsProjectImage from "../../public/images/adsProject.png";
import foodProjectImage from "../../public/images/foodProject.png";
import travelProjectImage from "../../public/images/travelProject.png";
import waveProjectImage from "../../public/images/waveProject.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Projects = () => {
  return (
    <div id="projects" className="w-[100%] h-[100vh] md:mb-[400px] mb-[200px]">
      <div
        data-aos="fade-left"
        className="max-w-[1240px]  md:my-[8rem]   bg-[#DECBA4] mx-auto px-16 py-10"
      >
        <p className="text-xl tracking-[0.5rem] font-bold uppercase text-[#3d81bc]">
          Projects
        </p>
        <h2 className="py-4">What I've build </h2>
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
      <div className="flex justify-center md:mb-[10rem] ">
        <Link href="/#contact">
          <div className=" p-4 hover:scale-110 ease-in duration-300 animate-bounce">
            <HiOutlineChevronDoubleDown size={40} className="text-[#3d81bc]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
