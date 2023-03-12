import Link from "next/link";
import React from "react";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
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
            <div className="rounded-full shadow-lg shadow-gray-600 p-4 hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={26} className='text-[#5651e5]'/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
