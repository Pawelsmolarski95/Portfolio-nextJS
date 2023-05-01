import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";
import portret from "../../public/images/portret.jpeg";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 1000,
    });
  }, []);

  return (
    <div
      id="about"
      className="w-[100%] h-full max-w-[1240px] lg:m-auto  flex flex-col gap-8 items-center justify-center "
    >
      <div
        
        className="max-w-[1240px] lg:mt-[10rem]  m-auto lg:grid grid-cols-3  p-4 md:p-16 bg-transparent gap-8"
      >
        <div className="col-span-2 ">
          <p className="uppercase tracking-[0.5rem] my-4 text-[#3d81bc] text-xl font-bold ">
            About
          </p>


          <p className="text-white text-[14px] ">
            I'm Paweł Smolarski, I have spent the last 6 years in the fire
            service working as a profesional firefighter. I have always had a
            knack for technology and working with computers. In 2021, I began to
            take a serious interest in Web Development. I started reading about
            HTML and CSS and began creating my first websites. Day by day the
            creation of pages became more and more interesting so I started to
            learn JavaScritpt.{" "}
          </p>
          <p className="text-white  text-[14px] ">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started looking for additional learning materials,
            book, courses and documentation to learn more and more about this
            technology. In July in 2021 I started a nine-month course "FullStack
            Developer" in Kodilla. It has been a very busy time, I have been
            diligently completing all materials every day and creating my
            additional projects. I started working with React and application
            development became more and more exciting. Over time, I became
            interested in the backend site. I became familiar with NodeJS,
            Express, NestJS and MongoDB. These technologies allowed me to create
            fullstack applications which you can see on my{" "}
            <Link href="/">GitHub</Link>.
          </p>
          <p className="text-white text-[14px]">
            I am an ambitious and conscientious person who loves programming and
            creating applications and websites. I enjoy learning new things and
            solving technical problems. Also interested in UX/UI Design(looking
            from a different side gives great advantages in software
            development)
          </p>
          <a
            href="https://github.com/Pawelsmolarski95"
            target={"_blank"}
            rel={"noreferrer"}
            passHref={true}
          >
            <p className="py-4 mt-2 cursor-pointer animate-bounce text-center text-lg text-white ">
              Check out some of my last projects
            </p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          className=" w-[330px] h-auto p-4 bg-[#3E5151]  m-auto flex items-center justify-center  hover:scale-105 ease-in duration-300"
        >
          <Image src={portret} width={300} height={650} />
        </div>
      </div>
      
    </div>
  );
};

export default About;
