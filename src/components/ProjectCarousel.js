import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import ProjectItemsDesktop from "./ProjectItemsDesktop";
import ProjectItemDesktop from "./ProjectItemDesktop";

import { Projects } from "@/data/db";

export const ProjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className=" relative w-[100%] max-w-[1100px] m-auto">
      <button
        className=" bg-transparent border-none rounded-none absolute z-10 top-[50%] translate-y-[-50%] left-[-40px]"
        onClick={scrollPrev}
      >
        <FaArrowLeft color="#3d81bc" size={30} />
      </button>
      <div className="overflow-hidden " ref={emblaRef}>
       <ProjectItemsDesktop />
      </div>
      <button
        className=" bg-transparent border-none rounded-none absolute z-10 top-[50%] translate-y-[-50%] right-[-40px] "
        onClick={scrollNext}
      >
        <FaArrowRight color="#3d81bc" size={30}/>
      </button>
    </div>
  );
};
