import Main from "./Main.js";
import React from "react";
import About from "./About.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";
import Footer from "./Footer.js";

const Container = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-7 bg-gradient-to-r from-[#3E5151]  to-[#DECBA4]">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Container;
