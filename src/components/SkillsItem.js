import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsItem = ({skillImage, skillName}) => {
    useEffect(() => {
        AOS.init({
          duration: 500,
          delay: 100,
        });
      }, []);
  return (
    <div
      data-aos="zoom-in"
      className="p-6 bg-white m-auto h-full w-full shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
    >
      <div className="grid grid-cols-2 gap-4 h-full justify-center items-center">
        <div className="m-auto hover:animate-bounce">
          <Image
            src={skillImage}
            width={64}
            height={64}
            alt="logo"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className=" text-[10px] lg:text-sm">{skillName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;