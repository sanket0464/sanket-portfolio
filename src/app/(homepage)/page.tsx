"use client";

import { useRef } from "react";
import AboutSection from "../../components/Homepage/aboutSection";
import ExpertiesSection from "../../components/Homepage/expertiseSection";
import Footer from "../../components/Homepage/footer";
import InfoSection from "../../components/Homepage/infoSection";
import SelectedWork from "../../components/Homepage/workSection";
import Navbar from "../../components/Navbar/navbar";
import Testimonials from "../../components/Homepage/testimonials";
import Swiper from "swiper";

const Homepage = () => {
  const infoRef: any = useRef(null);
  const workRef: any = useRef(null);
  const aboutRef: any = useRef(null);
  return (
    <>
      <div className="bg-[#FFFDF8] xl:block hidden">
        <Navbar infoRef={infoRef} workRef={workRef} aboutRef={aboutRef} />
        <InfoSection ref={infoRef} selectedWorkRef={workRef} />
        <SelectedWork ref={workRef} />
        <ExpertiesSection />
        <AboutSection ref={aboutRef} />
        <Testimonials />
        <Footer />
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-[32px]">
        <img
          src="/logos/mobileLogo.svg"
          alt=""
          className="w-[76px] aspect-square"
        />
        <div className="flex flex-col gap-6 xl:hidden">
          <p className="text-sm text-black text-center">
            This view is currently unavailable on Mobile
          </p>
          <p className="text-[20px] font-semibold text-center">
            Go to desktop to view it
          </p>
        </div>
      </div>
    </>
  );
};
export default Homepage;
