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
      <div className="flex gap-8">
        {images.map((image: any) => (
          <div
            key={image.url}
            className="w-[204px] h-[245px] flex-shrink-0 rounded-xl shadow-lg border-[#1C1C1C] border-[6px] drop-shadow-2xl"
          >
            <img
              src={image.url}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
