"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import logo from "../../public/images/logo_main.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import SwitchToggle from "./SwitchToggle";

const Navbar = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleTheme = () => {
    setIsDarkmode(!isDarkmode);
    localStorage.setItem("isDarkmode", !isDarkmode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkmode");
    if (storedTheme) {
      setIsDarkmode(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 800,
    });
  }, []);

  return (
    <Popover className={"container mx-auto flex items-center  px-6 py-2 h-24"}>
      <div className="relative">
        <a href="/">
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="mt-3 ml-5 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </a>

        {isHovered && (
          <div className="hover-text absolute top-[50%] translate-y-[-50%] left-[100px] z-10 ease-in duration-500"></div>
        )}
      </div>

      <div className="grow">
        <div className="hidden lg:flex items-center uppercase tracking-widest justify-center md:justify-center text-[#3E5151] gap-2 md:gap-8 ">
          <Link
            className="hover:border-[#33adf1] hover:border-b-2 border-b-2 border-transparent ease-in duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:border-[#33adf1] hover:border-b-2 border-b-2 border-transparent ease-in duration-300"
            href="/about"
          >
            About
          </Link>

          <Link
            className="hover:border-[#33adf1] hover:border-b-2 border-b-2 border-transparent ease-in duration-300"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:border-[#33adf1] hover:border-b-2 border-b-2 border-transparent ease-in duration-300 "
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <SwitchToggle isDarkmode={isDarkmode} toggleTheme={toggleTheme} />
      <div className="grow  flex items-center justify-end lg:hidden">
        <Popover.Button className="inline-flex items-center justify-end gap-2 p-2 border-2 border-gray-600 text-gray-600 bg-transparent md:gap-8">
          <AiOutlineMenu size={25} aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Panel
        focus
        className="absolute z-[100] inset-x-0 top-0 origin-top-right transform p-2 bg-gray-100 transition lg:hidden"
      >
        <div className="rounded-lg shadow-lg   ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <Image src={logo} alt="Logo" width={90} height={90} />
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gray-600 p-2 text-[#3E5151]">
                  <span className="sr-only">Close menu</span>
                  <AiOutlineClose size={20} />
                </Popover.Button>
              </div>
            </div>
            <div className="flex justify-center mt-8 items-center flex-col text-gray-600 uppercase tracking-widest gap-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <div className="flex items-center text-[#DECBA4] justify-center gap-8 my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/pawelsmolarski/"
                  target={"_blank"}
                  rel={"noreferrer"}
                  passhref="true"
                >
                  <div className="rounded-full bg-gray-600 text-gray-100 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Pawelsmolarski95"
                  target={"_blank"}
                  rel={"noreferrer"}
                  passhref="true"
                >
                  <div className="rounded-full bg-gray-600 text-gray-100 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithubAlt />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default Navbar;
