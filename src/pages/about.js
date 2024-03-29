import React, { useEffect } from "react";
import portret from "../../public/images/portret.jpeg";
import Image from "next/image";
import { SkillsCarousel } from "../components/SkillsCarousel";


const About = () => {
  return (
    <div
      id="about"
      className="w-full h-full  flex-col  max-w-[1200px] px-10 m-auto flex "
    >
      <div className="m-auto flex flex-col justify-center items-center md:flex-row gap-8">
        <div className="w-[100%] md:w-[50%] mt-10 sm:mt-0 ">
          <h3>Get to Now Me...</h3>
          <p className="text-gray-600 text-[14px] mt-10 ">
            I'm Paweł Smolarski, I have spent the last 6 years in the fire
            service working as a profesional firefighter. I have always had a
            knack for technology and working with computers. In 2021, I began to
            take a serious interest in Web Development.
          </p>
          <br />
          <p className="text-gray-600  text-[14px] ">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started looking for additional learning materials,
            book, courses and documentation to learn more and more about this
            technology. I realized that I loved it. Developing websites and
            working with code has become my passion.
          </p>
          <br />
          <p className="text-gray-600 text-[14px]">
            I am an ambitious and open-minded person who loves programming and
            developing applications and websites. I believe that the most
            important thing in software development is passion, it is thanks to
            it that projects are unique and have a much higher value.
          </p>
          <br />
        </div>

        <div className="w-[280px] h-[400px] object-cover p-4  rounded-xl mb-10 flex items-center justify-center  hover:scale-105 ease-in duration-300">
          <Image src={portret} className="rounded-xl h-full shadow-lg" />
        </div>
      </div>
      <div className="mb-10 sm:px-10 lg:px-[120px] flex flex-col gap-8 justify-center">
        <h3 className="">Technology I use:</h3>
        <div>
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
};

export default About;
