import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 100,
    });
  }, []);
  return (
    <div
      id="skills"
      className="w-full lg:h-screen p-2 flex flex-col items-center justify-center"
    >
      <div
        data-aos="fade-left"
        className="max-w-[1240px]  bg-[#DECBA4] mx-auto my-auto font-mono flex flex-col justify-center p-16"
      >
        <p className="py-4 uppercase tracking-[0.5rem] text-[#3d81bc] text-xl font-bold ">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            data-aos="zoom-in"
            className="p-6 bg-white shadow-xl rounded-xl hover:scale-105- ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto  hover:animate-bounce ">
                <Image
                  src="/../public/assets/html.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce ease-out ">
                <Image
                  src="/../public/assets/css.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/js.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/bootstrap.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/react.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/redux.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Redux</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/mongo.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 shadow-xl  bg-white justify-center rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="my-auto grid grid-cols-2 gap-4 justify-center h-full items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/node.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/git.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center h-full items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/typescript.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="p-6 shadow-xl bg-white rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center h-full items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                  src="/../public/assets/tailwind.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <Link href="/#projects">
          <div className=" p-4 hover:scale-110 ease-in duration-300 animate-bounce">
            <HiOutlineChevronDoubleDown size={40} className="text-[#3d81bc]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
