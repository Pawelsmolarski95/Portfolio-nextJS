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

  return (
    <div className="w-full  font-mono absolute top-[50%] translate-y-[-40%]  md:translate-y-[-50%] flex justify-center items-center">
      <div
        data-aos="fade-left"
        className="w-full h-full flex flex-col md:flex-row gap-10 justify-center items-center "
      >
        <div data-aos="fade-right ">
          <Image
            src={mainImage}
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        <div
        
          className="flex flex-col items-center  text-gray-600 justify-center"
        >
          <div className="flex  flex-col justify-center items-center gap-1 lg:gap-6">
            <h2 className="py-4 flex  text-center">
              Hello, I'm Paweł Smolarski
            </h2>
          </div>
          <div className="flex flex-col items-center w-[300px]">
            <div className="flex flex-row gap-6">
              <h2 className="text-gray-600 italic">
                <ReactTyped
                  strings={["JavaScript", "Frontend", "Web", "React"]}
                  typeSpeed={100}
                  backSpeed={150}
                  delay={200}
                />
              </h2>
              <h2 className="text-gray-600">Developer</h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-10 mt-16 mb-[100px] w-full m-auto max-w-[332px]">
            <a
              href="https://www.linkedin.com/in/pawelsmolarski/"
              target={"_blank"}
              rel={"noreferrer"}
              passhref="true"
            >
              <div className="rounded-full  shadow-lg bg-[#33adf1]  text-[#DECBA4] p-5 cursor-pointer ease-in duration-500">
                <FaLinkedin size={25} />
              </div>
            </a>
            <a
              href="https://github.com/Pawelsmolarski95"
              target={"_blank"}
              rel={"noreferrer"}
              passhref="true"
            >
              <div className="rounded-full  shadow-lg bg-[#33adf1] text-gray-500  p-5 cursor-pointer ease-in duration-500">
                <FaGithub size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
