import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectItem = ({ title, image, urlLink, alt, techStack }) => {
  return (
    <div className="relative h-[600px] w-full md:w-[700px] lg:w-[1100px]  m-auto  rounded-xl cursor-pointer group ">
      <Image src={image} className="w-full  h-full" alt={alt} loading = "eager" />
      <div className="absolute group text-white  z-10 left-0 bottom-0  pl-10 w-full bg-gray-800 bg-opacity-90">
        <h3 className="text-[20px] uppercase my-1 font-thin">APRIL 2021</h3>
        <h2 className="text-[24px]  my-2">New Wave Festiwal</h2>
        <div className=" h-0  group-hover:h-[100px] transition-height duration-500 ease-in-out   ">
          <div>
            <div className="mb-4 opacity-0 group-hover:opacity-100 ease-in transition duration-500 ">
              <p>
                A site where you can book a ticket for a concert of your choice,
                along with support for a purchase form. We communicate with the
                server using WebSocket, where we know in real time which seat is
                free.
              </p>
            </div>
            <div className="flex opacity-0 group-hover:opacity-100 ease-in transition duration-200 gap-10 mb-4 justify-start">
              <p>React</p>
              <p>Redux</p>
              <p>Thunk</p>
              <p>Sass</p>
              <p>MongoDB</p>
              <p>Node</p>
              <p>Express</p>
            </div>{" "}
          </div>
        </div>

        <div className="flex mb-6 gap-6 ">
          <a
            href="https://github.com/Pawelsmolarski95"
            target={"_blank"}
            rel={"noreferrer"}
            passhref="true"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://github.com/Pawelsmolarski95"
            target={"_blank"}
            rel={"noreferrer"}
            passhref="true"
          >
            <FiExternalLink size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
