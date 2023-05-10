import Image from "next/image";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectItemDesktop = ({
  name,
  src,
  alt,
  data,
  description,
  url,
  git,
  tech,
}) => {
  return (
    <div className=" h-[600px] shrink-0 relative m-auto  mb-8 rounded-xl cursor-pointer group ">
      <Image src={src} className="w-full  h-full " alt={alt}  />
      <div className="absolute group text-white  z-10 left-0 bottom-0  pl-10 w-full bg-gray-800 bg-opacity-90">
        <h3 className="text-[18px] uppercase my-2 tracking-wider font-thin">{data}</h3>
        <h2 className="text-[24px]  my-2">{name}</h2>
        <div className=" h-0  group-hover:h-[100px] transition-height duration-500 ease-in-out   ">
          <div>
            <div className="mb-4 opacity-0 group-hover:opacity-100 ease-in transition duration-500 ">
              <p>{description}</p>
            </div>
            <div className="flex opacity-0 group-hover:opacity-100 text-[15px] ease-in transition duration-200 gap-10 mb-4 justify-start">
              {tech.map((value) => (
                <p>{value}</p>
              ))}
            </div>{" "}
          </div>
        </div>

        <div className="flex mb-6 gap-7 ">
          <a href={git} target={"_blank"} rel={"noreferrer"} passhref="true">
            <FaGithub size={26} />
          </a>
          <a href={url} target={"_blank"} rel={"noreferrer"} passhref="true">
            <FiExternalLink size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemDesktop;
