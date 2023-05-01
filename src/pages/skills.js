import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import SkillsItem from "../components/SkillsItem";
import { skills } from "../data/db.js";

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
      className="w-[100%] h-full   flex flex-col items-center justify-center"
    >
      <div
        data-aos="fade-left"
        className="max-w-[1240px]  bg-transparent m-auto flex flex-col justify-center p-12"
      >
        <p className="uppercase tracking-[0.5rem] my-4 text-[#3d81bc] text-xl font-bold ">
          Skills
        </p>

        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillsItem skillName={skill.name} skillImage={skill.url} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
