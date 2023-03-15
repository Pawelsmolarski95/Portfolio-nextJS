import Main from "./main.js";
import React from "react";
import About from "./about.js";
import Contact from "./contact.js";
import Projects from "./projects.js";
import Skills from "./skills.js";

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
