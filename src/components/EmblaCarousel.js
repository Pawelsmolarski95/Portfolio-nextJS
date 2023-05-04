import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="row relative">
      <button
        className="bg-gray-400 opacity-40 w-[15px] h-[60px]  md:h-[60px] lg:h-[80px] absolute z-10 border-none rounded-none"
        onClick={scrollPrev}
      >
        <IoIosArrowBack />
      </button>
      <div
        className="overflow-hidden mb-10 sm:mb-0 flex row cursor-pointer relative"
        ref={emblaRef}
      >
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
      </div>
      <button
        className="bg-gray-400 opacity-40 w-[15px] h-[60px] md:h-[60px] lg:h-[80px] border-none rounded-none absolute z-10 top-0 right-0 "
        onClick={scrollNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};
