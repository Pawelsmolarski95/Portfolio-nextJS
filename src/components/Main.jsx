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
      delay: 100
    });
  }, []);
  return (
    <div className="w-full h-screen text-center bg-gradient-to-r from-[#3E5151]  to-[#DECBA4] font-mono">
      <div className="m-auto w-full h-full p-2  flex flex-col justify-center items-center">
        <div className="max-w-[1440] w-full  m-auto p-2 flex flex-row gap-10 justify-center items-center">
          <div data-aos="fade-right" className="ml-5">
            <Image src={mainImage} width={400} height={400} />
          </div>
          <div className="ml-10 px-10">
            <h2 className="py-4 text-white">
              Hello, I'm{" "}
              <span className="text-[#3d81bc]">Paweł Smolarski</span>
            </h2>
            <h2 className="py-2 w-[500px] text-white">
              I'am a{" "}
              <span className="text-[#3d81bc]">
                <Typical
                steps={[
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
              </span>
              
              Developer
            </h2>

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
        <div className="flex justify-center mb-16">
          <Link href="/about">
            <div className=" p-4 hover:scale-110 ease-in duration-300 animate-bounce">
              <HiOutlineChevronDoubleDown
                size={40}
                className="text-[#3d81bc]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
