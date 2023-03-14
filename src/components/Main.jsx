import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";
import mainImage from "../../public/assets/face.jpeg";
import Image from "next/image";
import Typical from "react-typical";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 200,
    });
  }, []);
  return (
    <div className=" w-full h-full lg:p-2 mb-14 bg-gradient-to-r from-[#3E5151] to-[#DECBA4] font-mono flex flex-col justify-center items-center">
      <div
        data-aos="fade-left"
        className=" mt-[110px] py-1 lg:py-16 flex h-full lg:flex-row flex-col gap-2 justify-center items-center "
      >
        <div data-aos="fade-right " >
          <Image src={mainImage} width={400} height={400} />
        </div>
        <div
          data-aos="flip-down"
          className="md:ml-10  px-10 md:items-center items-center justify-center"
        >
          <div className="flex  flex-col justify-center items-center gap-1 lg:gap-6">
            <h2 className="py-4 flex  text-white text-center">Hello, I'm</h2>{" "}
            <h2 className="text-[#3d81bc]"> Paweł Smolarski</h2>
          </div>
          <div className='flex flex-col items-center' >
            <h2 className="py-6 w-[500px] text-center  text-white">I'am </h2>
            <div className="flex flex-row gap-6">
              <h2 className="text-[#3d81bc] ">
              <Typical
                steps={[
                  2000,
                  "Frontend",
                  1000,
                  "Web",
                  1000,
                  "Javascript",
                  1000,
                  "React",
                  1000,
                ]}
                loop={1}
                wrapper="d"
              />
            </h2>
            <h2 className="text-white">Developer</h2>
            </div>
          </div>

          <div className="flex items-center justify-between mt-16 w-full m-auto max-w-[332px]">
            <div className="rounded-full  shadow-lg bg-[#3E5151]  text-[#DECBA4] p-5 cursor-pointer ease-in duration-500">
              <FaLinkedin size={25} />
            </div>
            <div className="rounded-full  shadow-lg bg-[#3E5151] text-[#DECBA4]  p-5 cursor-pointer ease-in duration-500">
              <FaGithub size={25} />
            </div>
            <div className="rounded-full  shadow-lg bg-[#3E5151] text-[#DECBA4]  p-5 cursor-pointer ease-in duration-500">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full  shadow-lg bg-[#3E5151] text-[#DECBA4]  p-5 cursor-pointer ease-in duration-500">
              <BsPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:mb-4 mt-5">
        <Link href="/#about">
          <div className=" p-4 hover:scale-110 ease-in duration-300 animate-bounce">
            <HiOutlineChevronDoubleDown size={40} className="text-[#3d81bc]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
