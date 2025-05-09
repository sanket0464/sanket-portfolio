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
    <div className="bg-[#FFFDF8]">
      <Navbar infoRef={infoRef} workRef={workRef} aboutRef={aboutRef} />
      <InfoSection ref={infoRef} selectedWorkRef={workRef} />
      <SelectedWork ref={workRef} />
      <ExpertiesSection />
      <AboutSection ref={aboutRef} />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default Homepage;
