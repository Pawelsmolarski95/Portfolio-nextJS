import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import SkillsItem from "./SkillsItem";
import { skills } from "../data/db.js";

const Skills = () => {

  console.log(skills)
  
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 100,
    });
  }, []);
  return (
    <div
      id="skills"
      className="w-full lg:h-screen lg:p-2 flex flex-col items-center justify-center"
    >
      <div
        data-aos="fade-left"
        className="max-w-[1300px]  bg-[#DECBA4] mx-auto my-auto font-mono flex flex-col justify-center p-12"
      >
        <p className="py-4 uppercase tracking-[0.5rem] text-[#3d81bc] text-xl font-bold ">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          { skills.map((skill) => (
            <SkillsItem skillName={skill.name} skillImage={skill.url} />
          ))}
          
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
