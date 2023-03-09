import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="tracking-widest py-2 text-[#565ef1] uppercase">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105- ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce ">
                <Image
                src="/../public/assets/html.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce ease-out ">
                <Image
                src="/../public/assets/css.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/js.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/bootstrap.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/react.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/redux.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Redux</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/mongo.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl  justify-center rounded-xl hover:scale-105 ease-in duration-300">
            <div className="my-auto grid grid-cols-2 gap-4 justify-center h-full items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/node.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/git.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center h-full items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/typescript.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>  
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center h-full items-center">
              <div className="m-auto hover:animate-bounce">
                <Image
                src="/../public/assets/tailwind.png"
                width={64}
                height={64}
                alt="logo"
              />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>  
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
