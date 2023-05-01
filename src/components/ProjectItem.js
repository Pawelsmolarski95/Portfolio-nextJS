import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectItem = ({ title, image, urlLink, alt, techStack }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 200,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group bg-[#3E5151] hover:bg-[#3d81bc] "
    >
      <Image
        src={image}
        className="rounded-xl group-hover:opacity-10"
        alt={alt}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-white tracking-widest text-center">
          {title}
        </h3>

        <p className="hidden lg:block pb-4 pt-2 text-xs text-white text-center ">{techStack}</p>
        <Link href={urlLink}>
          <p className="text-center py-3 px-3 rounded-lg w-[10rem] lg:max-w-[25rem] absolute left-[50%] translate-x-[-50%] bg-white text-gray-700 font-bold text-base cursor-pointer  ">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
