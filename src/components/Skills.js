import js from "../.././public/images/js.png";
import css from "../.././public/images/css.png";
import sass from "../.././public/images/sass.png";
import tailwind from "../.././public/images/tailwind.png";
import bootstrap from "../.././public/images/bootstrap.png";
import typescript from "../.././public/images/typescript.png";
import react from "../.././public/images/react.png";
import redux from "../.././public/images/redux.png";
import node from "../.././public/images/node.png";
import mongo from "../.././public/images/mongo.png";
import mysql from "../.././public/images/mysql.png";
import nestjs from "../.././public/images/nestjs.png";
import Image from "next/image";

const images = [
  { src: js, alt: "logo" },
  { src: css, alt: "logo" },
  { src: sass, alt: "logo" },
  { src: tailwind, alt: "logo" },
  { src: bootstrap, alt: "logo" },
  { src: typescript, alt: "logo" },
  { src: react, alt: "logo" },
  { src: redux, alt: "logo" },
  { src: node, alt: "logo" },
  { src: mongo, alt: "logo" },
  { src: mysql, alt: "logo" },
  { src: nestjs, alt: "logo" },
];

const Skills = () => {
  return (
    <div className="flex row gap-10 w-full ">
      {images.map((image, index) => (
        <Image
          key={index}
          className="h-[60px] object-scale-down md:h-[60px] lg:h-[80px] flex-[0_0_20%] sm:flex-[0_0_15%] lg:flex-[0_0_10%] min-w-0"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default Skills;
