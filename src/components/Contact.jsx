import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact"  className="w-full lg:h-screen">
      <div data-aos="fade-up" className="max-w-[1240px] m-auto my-16 bg-[#DECBA4] px-16 pt-8 font-mono w-full">
        <p className="py-4 uppercase tracking-[0.5rem] text-[#3d81bc] text-xl font-bold">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className=" max-w-[800px] m-auto text-center py-4">
          <form>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 flex border-gray-300 rounded-lg p-3"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  type="tel"
                  name="name"
                  id="name"
                  className="border-2 flex border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 flex border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Subcject</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 flex border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  rows={6}
                  type="text"
                  name="name"
                  id="name"
                  className="border-2 flex border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>
            <button className="w-full text-gray-100 p-4 mt-4 mb-4">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex justify-center pt-12">
          <Link href="/">
            <div className=" shadow-gray-600 animate-bounce  cursor-pointer p-4 hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={36} className="text-[#3d81bc]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
