"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Section from "./newWorkModel";
import MobileSection from "./mobileSectoin";

const projects = [
  {
    title: "MeterScan",
    order: "01",
    link: "https://www.behance.net/gallery/185012941/Meterscan-Application",
    image: "/images/newwork1.svg",
    icon: "/icons/newwork1.svg",
    description:
      "Designed an app to simplify utility billing, generating bills and processing payments with a seamless, user-friendly experience.",
    appType: "Mobile App",
    color: "#121733",
  },
  {
    title: "Life Drop",
    order: "02",
    link: "https://www.behance.net/gallery/188265953/Life-Drop",
    image: "/images/newwork2.svg",
    icon: "/icons/newwork2.svg",
    description:
      "A blood donation app that connects donors with recipients and helps users find nearby campaigns, ensuring quick support during emergencies.",
    appType: "Mobile App",
    color: "#291317",
  },
  {
    title: "Monkey Space",
    order: "03",
    link: "https://www.behance.net/gallery/185191653/Monkey-Space-DJ-Website",
    image: "/images/newwork3.svg",
    icon: "/icons/newwork3.svg",
    description:
      "Designed a website for a client to enhance their online presence, feature their music, expand their reach, and streamline event bookings.",
    appType: "Web App",
    color: "#121F34",
  },
];
interface Props {
  ref: any;
}
export default function SelectedWork({ ref }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let newIndex = activeIndex;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3) {
            newIndex = index;
          }
        }
      });

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <div
      className="bg-black pt-20 flex flex-col gap-[66px] sm:gap-[120px]"
      ref={ref}
    >
      <div className="justify-center flex items-center flex-col sm:gap-[28px] gap-5">
        <p className="font-semibold text-2xl md:text-[32px] text-white">
          Selected work
        </p>
        <p className="font-light sm:text-base text-sm text-center text-white">
          Work that brought impact on my learnings
        </p>
      </div>
      {/* //   className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-8 gap-16"
    //   ref={ref}
    // >
    //   <div className="justify-center flex items-center flex-col md:gap-[32px] gap-5">
    //     <p className="font-semibold text-2xl md:text-[32px] text-white">
    //       Selected work
    //     </p>
    //     <p className="font-light md:text-base text-sm text-center">
    //       Work that brought impact on my learnings
    //     </p>
    //   </div>

    //   <div className="relative flex flex-row-reverse w-full max-w-6xl overflow-visible">
    //     <div className="sticky top-20 h-[400px] w-1/2 flex justify-center overflow-visible">
    //       <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[90%] w-60 bg-[#FFCECE] blur-[160px] opacity-40 z-10"></div>
    //       <motion.img */}
      {/* //         key={projects[activeIndex].id}
    //         src={projects[activeIndex].image}
    //         alt={projects[activeIndex].title}
    //         className="w-full h-full object-cover rounded-lg shadow-lg z-20"
    //         initial={{ opacity: 0, scale: 0.9 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.5 }}
    //       />
    //     </div> */}

      {/* //     {/* Left: Scrollable Text Section */}
      {/* //     <div className="w-1/2 pr-10 space-y-32">
    //       {projects.map((project, index) => ( */}
      {/* //         <div */}
      {/* //           key={project.id}
    //           ref={(el: any) => (sectionsRef.current[index] = el)}
    //           className="h-[400px] flex flex-col justify-center gap-[32px]"
    //         >
    //           <img src={project.index} alt="" className="h-[90px] w-fit" />
    //           <h3 className="text-4xl font-bold">{project.title}</h3>
    //           <p className="text-lg text-gray-400 mt-4">
    //             {project.description}
    //           </p>
    //           <div className="flex h-4 items-center gap-2 cursor-pointer">
    //             <p className="text-[#FFB800] underline">View case study</p>
    //             <img src="/icons/arrow-top.svg" alt="" className="max-h-fit" />
    //           </div>
    //         </div> */}
      {/* //       ))}
    //     </div> */}
      {/* //   </div> */}
      {/* // </div> */}
      <div className="w-full px-[120px] sm:pb-[120px] flex-col gap-[100px] hidden sm:flex">
        {projects.map((project) => (
          <Section
            key={project.title}
            title={project.title}
            link={project.link}
            image={project.image}
            icon={project.icon}
            description={project.description}
            color={project.color}
            appType={project.appType}
            order={project.order}
          />
        ))}
      </div>
      <div className="flex flex-col sm:hidden gap-[66px] px-4">
        {projects.map((project) => (
          <MobileSection
            image={project.image}
            link={project.link}
            title={project.title}
            description={project.description}
            key={project.title}
          />
        ))}
      </div>
    </div>
  );
}
