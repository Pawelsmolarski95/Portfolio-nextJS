import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
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
    const handleShadow = () => {
      if (window.scrollY >= 60) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 800,
    });
  }, []);

  return (
    <div
      className={
        fixed
          ? "fixed w-full h-20 bg-transparent text-[#3E5151] tracking-widest z-[100] font-mono "
          : " w-full h-20 bg-gradient-to-r from-[#3E5151]  to-[#DECBA4] border-color-[#3E5151] text-[#3E5151] tracking-widest z-[100] font-mono "
      }
    >
      <div className="flex justify-between items-center w-full h-full  ">
        <div className="mt-5 ml-10">
          <Link href="/">
            <Image src={logo} width={150} height={150} />
          </Link>
        </div>

        <div data-aos="fade-down">
          <ul className="hidden md:flex md:mr-10">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#3E5151]">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#3E5151] text-[#DECBA4] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h5>logo</h5>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg bg-[#DECBA4] text-[#3E5151] p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-grey-300 my-4">
              <p className="w=[85%] md:w-[90%] py-4">
                Let's bulid something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col ">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="pt-40">
            <p className="py-4 uppercase tracking-widest text-[#3d81bc] text-xl font-bold ">
              Let's Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full   p-3 cursor-pointer ease-in duration-500">
                <FaLinkedin size={25} />
              </div>
              <div className="rounded-full  p-3 cursor-pointer ease-in duration-500">
                <FaGithub size={25} />
              </div>
              <div className="rounded-full  p-3 cursor-pointer ease-in duration-500">
                <AiOutlineMail size={25} />
              </div>
              <div className="rounded-full  p-3 cursor-pointer ease-in duration-500">
                <BsPersonLinesFill size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
