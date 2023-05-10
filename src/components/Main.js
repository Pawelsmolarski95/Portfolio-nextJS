import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import mainImage from "../../public/images/face1.jpeg";
import Image from "next/image";
import ReactTyped from "react-typed";

const Main = () => {

  return (
    <div className="w-full h-full tracking-widest font-serif flex justify-center items-center">
      <div className="w-full h-full flex flex-col lg:flex-row gap-10 justify-center items-center ">
        <div className="mt-16 md:mt-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          <Image src={mainImage} className="rounded-xl fill " />
        </div>
        <div className="flex flex-col  items-center  text-gray-600 justify-center">
          <div className="flex   flex-col justify-center items-center gap-1 lg:gap-6">
            <h2 className="py-4 sm:text-[34px] text-[24px] flex  text-center">
              Hello, I'm Paweł Smolarski
            </h2>
          </div>
          <div className="flex flex-col items-center w-[300px]">
            <div className="flex flex-row gap-6">
              <h2 className="text-gray-600 sm:text-[34px] text-[24px] italic">
                <ReactTyped
                  strings={["JavaScript", "Frontend", "Web", "React"]}
                  typeSpeed={100}
                  backSpeed={150}
                  delay={400}
                />
              </h2>
              <h2 className="text-gray-600 sm:text-[34px] text-[24px]">
                Developer
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-10 mt-16 mb-[100px] w-full m-auto max-w-[332px]">
            <a
              href="https://www.linkedin.com/in/pawelsmolarski/"
              target={"_blank"}
              rel={"noreferrer"}
              passhref="true"
            >
              <div className="rounded-full  shadow-lg hover:scale-125 hover:text-[#3d81bc] hover:border-[#3d81bc]  text-gray-500  border-gray-500 border-2 p-5 cursor-pointer ease-in duration-500">
                <FaLinkedin size={25} className="hover:animate-bounce" />
              </div>
            </a>
            <a
              href="https://github.com/Pawelsmolarski95"
              target={"_blank"}
              rel={"noreferrer"}
              passhref="true"
            >
              <div className="rounded-full  shadow-lg border-2 hover:scale-125 hover:text-[#3d81bc] hover:border-[#3d81bc]  border-gray-500  text-gray-500  p-5 cursor-pointer ease-in duration-500">
                <FaGithub size={25} className="hover:animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
