import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Skills from "./Skills";



export const SkillsCarousel = () => {
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
        <Skills />
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
