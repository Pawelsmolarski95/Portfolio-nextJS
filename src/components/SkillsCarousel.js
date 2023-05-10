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
        className=" hover:scale-125 ease-in duration-75 bg-transparent w-[15px] h-[60px]  md:h-[60px] lg:h-[80px] absolute z-10  top-0 left-[-40px] border-none rounded-none"
        onClick={scrollPrev}
      >
        <IoIosArrowBack size={36} color="#3d81bc" />
      </button>
      <div
        className="overflow-hidden mb-10 sm:mb-0 flex row cursor-pointer relative"
        ref={emblaRef}
      >
        <Skills />
      </div>
      <button
        className=" hover:scale-125 ease-in duration-75 bg-transparent w-[15px] h-[60px] md:h-[60px] lg:h-[80px] border-none rounded-none absolute z-10 top-0 right-0 "
        onClick={scrollNext}
      >
        <IoIosArrowForward size={36} color="#3d81bc" />
      </button>
    </div>
  );
};
