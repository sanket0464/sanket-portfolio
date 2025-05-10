"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
  images: { url: string }[];
}
const ImageSlider = ({ images }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Infinite loop
    align: "start", // Align slides from the start
  });

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const autoPlay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000);
    return () => clearInterval(autoPlay);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex flex-shrink-0 py-[10px]">
        {images.map((image: any, index) => (
          <div
            key={index}
            className="flex w-[204px] h-[245px] flex-shrink-0 overflow-hidden  rounded-xl border-[#1C1C1C] border-[6px] drop-shadow-2xl mx-[16px] shadow-[10px_10px_0_0_#000000]"
          >
            <img
              src={image.url}
              alt=""
              className="w-full h-full object-cover rounded-xl shadow-[10px_10px_0_0_#000000"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
