import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ReactTyped from "react-typed";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1100px] w-full h-full  text-gray-600 flex flex-col justify-center  mb-10 items-center gap-6 sm:gap-16  m-auto"
    > 
    <div className="flex mt-6 flex-col sm:flex-row justify-center items-center gap-1 sm:gap-3">
      <h2 className="py-1 sm:py-4 sm:text-[34px] font-medium text-[28px] flex tracking-wider text-center">
        Looking for a 
        </h2>
        <h2 className="py-4 font-medium sm:text-[34px] text-[#3d81bc] text-[28px] flex tracking-wider text-center italic " >
          <ReactTyped
            strings={["Web Developer?","React Developer?", "teammate to project?"]}
            typeSpeed={100}
            backSpeed={100}
            delay={100}
          />
       
       
      </h2>
    </div>
      

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 w-full px-6">
        <div className="w-[90%] sm:w-[50%] flex flex-col justify-center items-center gap-10">
          <h2 className="font-extralight text-[20px] sm:text-[28px] tracking-wider">
            Find me via social media{" "}
          </h2>
          <div className="flex gap-8">
            {" "}
            <div className="rounded-full  shadow-lg    text-gray-500  border-gray-500 border-2 p-5 cursor-pointer ease-in duration-500">
              <FaLinkedin size={25} />
            </div>
            <div className="rounded-full  shadow-lg    text-gray-500  border-gray-500 border-2 p-5 cursor-pointer ease-in duration-500">
              <FaGithub size={25} />
            </div>
          </div>
        </div>
        <div className="w-[90%] sm:w-[50%] flex flex-col gap-8">
          <div className="">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="false"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="janesmith@gmail.com"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-md font-normal tracking-wider bg-indigo-600 w-[40%] px-3 py-2 text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
