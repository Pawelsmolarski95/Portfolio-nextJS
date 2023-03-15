import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaLinkedin,
  FaGithub,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import { BsFillPersonLinesFill, BsPersonLinesFill } from "react-icons/bs";
import logo from "../../public/assets/PS.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 800,
    });
  }, []);

  return (
    <div className="fixed flex w-[100%] h-20  z-[100] bg-transparent">
      <div className="flex justify-between font-mono tracking-widest items-center w-[100%] h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image
            src={logo}
            alt="/"
            width="140"
            height="80"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151] text-[#3E5151]">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151] text-[#3E5151]">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151] text-[#3E5151]">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151] text-[#3E5151]">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151] text-[#3E5151]">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden mr-[13rem]">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "lg:hidden fixed z-[10] left-0 top-0 w-full h-full bg-black/60"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 z-[1000] w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#3E5151] tracking-widest font-mono p-10 ease-in duration-500"
              : "fixed left-[-100%] z-[1000] top-0 p-10 ease-in duration-500 font-mono tracking-widest"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logo} width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-[#DECBA4]">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col text-[#DECBA4]">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#3d81bc]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center text-[#DECBA4] justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithubAlt />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
