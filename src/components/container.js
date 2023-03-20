import Main from "./Main.js";
import React from "react";
import About from "./About.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";

const Container = () => {
  return (
    <div className="bg-gradient-to-r from-[#3E5151]  to-[#DECBA4]">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Container;
