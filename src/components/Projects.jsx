import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import adsProjectImage from "../../public/assets/adsProject.png";
import foodProjectImage from "../../public/assets/foodProject.png";
import travelProjectImage from "../../public/assets/travelProject.png";
import waveProjectImage from "../../public/assets/waveProject.png";

const Projects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">
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
          techStack={
            "JavaScript, HTML, SASS, Bootstrap"
          }
        />
        <ProjectItem
          title={"TravelProject"}
          image={travelProjectImage}
          urlLink={"/yourads"}
          alt={"travel"}
          techStack={
            "React, Redux, React-Bootstrap, Sass"
          }
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
  );
};

export default Projects;
