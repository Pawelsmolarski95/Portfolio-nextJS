import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";


const Main = () => {
  return (
    <div className="w-full h-screen text-center bg-gradient-to-r from-zinc-800 to-black">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-white">
            Hello, I'm <span className="text-[#3d81bc] animate__animated animate__bounce ">Paweł</span>
          </h1>
          <h1 className="py-2 text-white">I'am a Frontend Developer</h1>
          
          <div className="flex items-center justify-between my-4 w-full m-auto max-w-[332px]">
            <div className="rounded-full  shadow-lg bg-slate-50 shadow-gray-400 p-5 cursor-pointer ease-in duration-500">
              <FaLinkedin size={25} />
            </div>
            <div className="rounded-full  shadow-lg bg-slate-50 shadow-gray-400 p-5 cursor-pointer ease-in duration-500">
              <FaGithub size={25} />
            </div>
            <div className="rounded-full  shadow-lg bg-slate-50 shadow-gray-400 p-5 cursor-pointer ease-in duration-500">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full  shadow-lg bg-slate-50 shadow-gray-400 p-5 cursor-pointer ease-in duration-500">
              <BsPersonLinesFill size={25} />
            </div>
          </div>
          <div className="flex justify-center pt-16">
          <Link href="/about">
            <div className="rounded-full shadow-lg shadow-gray-600 p-4 hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleDown size={26} className='text-[#5651e5]'/>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
