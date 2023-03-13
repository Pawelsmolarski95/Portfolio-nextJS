import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 100,
    });
  }, []);

  return (
    <div id='about'  className="w-full md:h-screen p-2 flex flex-col gap-8 items-center justify-center  py-1 lg:py-16 bg-gradient-to-r from-[#3E5151]  to-[#DECBA4]  font-mono">
      <div data-aos="fade-left" className="max-w-[1200px] lg:mt-[10rem] m-auto md:grid grid-cols-3  p-4 lg:p-16 bg-[#DECBA4] gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase tracking-[0.5rem] text-[#3d81bc] text-xl font-bold ">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 ">I am not normal developer</p>
          <p className="text-gray-600 ">
            I have spent the last 6 years in the fire service working as a
            profesional firefighter. I have always had a knack for technology
            and working with computers. In 2021, I began to take a serious
            interest in web development. I started making my first websites.
            Further seeking knowledge, I began a nine-month Fullstack Developer
            course with Kodilla.{" "}
          </p>
          <p className="text-gray-600 ">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learing Javascript and was even enthused
            with making websites iteractive.Day by day programming drew me in
            more and more all the time pursuing the course I started.Over time,
            I started learning new technologies such as React, Node JS, Mongo DB
            and building new projects by implementing the technologies
          </p>
          <p className="py-4 cursor-pointer underline">
            Check out some of my last projects
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <img
            className="rounded-xl"
            src="https://images.pexels.com/photos/1297611/pexels-photo-1297611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="laptop"
          />
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <Link href="/#skills">
          <div className=" p-4 hover:scale-110 ease-in duration-300 animate-bounce">
            <HiOutlineChevronDoubleDown size={40} className="text-[#3d81bc]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
