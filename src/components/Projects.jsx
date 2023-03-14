import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import adsProjectImage from "../../public/assets/adsProject.png";
import foodProjectImage from "../../public/assets/foodProject.png";
import travelProjectImage from "../../public/assets/travelProject.png";
import waveProjectImage from "../../public/assets/waveProject.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Projects = () => {
  return (
    <div id="projects">
      <div
        data-aos="fade-left"
        className="max-w-[1300px] md:my-[8rem] my-5 bg-[#DECBA4] font-mono mx-auto px-16 py-10"
      >
        <p className="text-xl tracking-[0.5rem] font-bold uppercase text-[#3d81bc]">
          Projects
        </p>
        <h2 className="py-4">What I've build </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
      <div className="flex justify-center md:mb-[10rem] mb-10">
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
