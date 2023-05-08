import Image from "next/image";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectItemMobile = ({ name, src, url, alt, git, data,description, tech  }) => {
  return (
    <div className="h-full w-full ">
      <div className="w-full h-full">
        <div className=" w-full h-auto py-4 flex flex-col justify-center items-center ">
          <Image
            src={src}
            aly={alt}
            className="w-[90%] mb-6 h-auto object-cover"
          />
          <div className="bg-grey-300 flex flex-col  border-b-2 border-b-gray-400  gap-2 text-gray-800 w-[90%] h-[30%]">
            <h3 className="text-[20px] uppercase my-1 font-thin">{data}</h3>
            <h2 className="text-[24px]  my-2">{name}</h2>
            <p>
             {description}
            </p>
            <div className="flex gap-4 justify-center flex-wrap ">
              
              {tech.map((value) => (
                <p>{value}</p>
              ))}
            </div>{" "}
            
            <div className="flex mb-6 gap-6 ">
              <a
                href={git}
                target={"_blank"}
                rel={"noreferrer"}
                passhref="true"
              >
                <FaGithub size={25} />
              </a>
              <a
                href={url}
                target={"_blank"}
                rel={"noreferrer"}
                passhref="true"
              >
                <FiExternalLink size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemMobile;
