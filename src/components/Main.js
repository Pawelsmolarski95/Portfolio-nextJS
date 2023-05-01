import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";
import mainImage from "../../public/images/face1.jpeg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactTyped from "react-typed";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 200,
    });
  }, []);

    const handleScroll = () => {
      const element = document.getElementById("#about");
      if (element) {
  
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
  return (
    <div
 
      className="w-full h-full lg:p-2   bg-transparent font-mono flex flex-col justify-center items-center"
    >
      <div
        data-aos="fade-left"
        className=" md:mt-[200px] lg:mt-[110px] py-1 lg:py-16 flex h-full lg:flex-row flex-col gap:2 lg:gap-12 justify-center items-center "
      >
        <div data-aos="fade-right ">
          
          <Image src={mainImage} width={400} height={400} />
        </div>
        <div
          data-aos="flip-down"
          className="md:ml-10  px-10 md:items-center uppercase items-center justify-center"
        >
          <div className="flex  flex-col justify-center items-center gap-1 lg:gap-6">
            <h2 className="py-4 flex  text-white text-center">
              Hello, I'm <span className="text-[#3d81bc] ml-4"> Paweł</span>{" "}
            </h2>{" "}
          </div>
          <div className="flex flex-col items-center w-[300px]">
            <div className="flex flex-row gap-6">
              <h2 className="text-[#3d81bc] ">
                <ReactTyped
                  strings={["JavaScript", "Frontend", "Web", "React"]}
                  typeSpeed={100}
                  backSpeed={150}
                  delay={200}
                />
              </h2>
              <h2 className="text-white">Developer</h2>
            </div>
          </div>

          <div className="flex items-center justify-between mt-16 w-full m-auto max-w-[332px]">
            <a
              href="https://www.linkedin.com/in/pawelsmolarski/"
              target={"_blank"}
              rel={"noreferrer"}
              passhref="true"
            >
              <div className="rounded-full  shadow-lg bg-[#3E5151]  text-[#DECBA4] p-5 cursor-pointer ease-in duration-500">
                <FaLinkedin size={25} />
              </div>
            </a>
            <a
              href="https://github.com/Pawelsmolarski95"
              target={"_blank"}
              rel={"noreferrer"}
              passhref="true"
            >
              <div className="rounded-full  shadow-lg bg-[#3E5151] text-[#DECBA4]  p-5 cursor-pointer ease-in duration-500">
                <FaGithub size={25} />
              </div>
            </a>
            <div className="rounded-full  shadow-lg bg-[#3E5151] text-[#DECBA4]  p-5 cursor-pointer ease-in duration-500">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full  shadow-lg bg-[#3E5151] text-[#DECBA4]  p-5 cursor-pointer ease-in duration-500">
              <BsPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
