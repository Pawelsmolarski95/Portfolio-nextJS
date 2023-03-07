import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Paweł Smolarski - front-end developer
          </p>
          <h1 className="py-4 text-grey-700">
            Hi, I'm <span className="text-[#5651e5]">Paweł</span>
          </h1>
          <h1 className="py-2 text-grey-700">A Front-End Web Developer</h1>
          <p className="py-4  text-gray-600 max-w-[70%] m-auto">
            I'm front-end web developer specializing in building exceptional
            digital experciences. Curently, I'm focused on building responsive
            front-end web applications while learning back-end technologies. {}
          </p>
          <div className="flex items-center justify-between my-4 w-full m-auto max-w-[332px]">
            <div className="rounded-full  shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-500">
              <FaLinkedin size={25} />
            </div>
            <div className="rounded-full  shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-500">
              <FaGithub size={25} />
            </div>
            <div className="rounded-full  shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-500">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full  shadow-lg shadow-gray-400 p-5 cursor-pointer ease-in duration-500">
              <BsPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
