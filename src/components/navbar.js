"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaLinkedin,
  FaGithub,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import { BsFillPersonLinesFill, BsPersonLinesFill } from "react-icons/bs";
import logo from "../../public/images/PS.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 800,
    });
  }, []);

  return (
    <Popover className={"container mx-aut flex items-center  px-6 py-2 h-24"}>
      <Image src={logo} alt="Logo" width={100} height={100} />
      <div className="grow">
        <div className="hidden md:flex items-center uppercase tracking-widest justify-center md:justify-end text-[#3E5151] gap-2 md:gap-8">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
      <div className="grow  flex items-center justify-end md:hidden">
        <Popover.Button className="inline-flex items-center justify-end gap-2 p-2 text-[#DECBA4] bg-[#3E5151] md:gap-8">
          <AiOutlineMenu size={25} aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Panel
        focus
        className="absolute z-[100] inset-x-0 top-0 origin-top-right transform p-2 bg-[#3E5151] transition md:hidden"
      >
        <div className="rounded-lg shadow-lg   ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <Image src={logo} alt="Logo" width={90} height={90} />
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center gap-2 bg-[#DECBA4] p-2 text-[#3E5151]">
                  <span className="sr-only">Close menu</span>
                  <AiOutlineClose size={20} />
                </Popover.Button>
              </div>
            </div>
            <div className="flex justify-center mt-8 items-center flex-col text-[#DECBA4] uppercase tracking-widest gap-4">
              <Link href="/" scroll={false}>
                Home
              </Link>
              <Link href="/#about" scroll={false}>
                About
              </Link>
              <Link href="/#skills" scroll={false}>
                Skills
              </Link>
              <Link href="/#projects" scroll={false}>
                Projects
              </Link>
              <Link href="/#contact" scroll={false}>
                Contact
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center">
              <div className="flex items-center text-[#DECBA4] justify-center gap-8 my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/pawelsmolarski/"
                  target={"_blank"}
                  rel={"noreferrer"}
                  passhref="true"
                >
                  <div className="rounded-full bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Pawelsmolarski95"
                  target={"_blank"}
                  rel={"noreferrer"}
                  passhref="true"
                >
                  <div className="rounded-full bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithubAlt />
                  </div>
                </a>
                <Link href="/#contact">
                  <div className="rounded-full bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default Navbar;
