import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./testimonial";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

const testimonials = [
  {
    image: "/images/slider/slider3.svg",
    name: "Saahil",
    position: "Product Manager",
    description:
      "lwgfywfwi wdiuwhdiwd wdhwiudh wd qwid uw douwqhd qo siq sqoud ouq hdoui  dwqd owqd qodw hw  od w  od h  qd how",
  },
  {
    image: "/images/slider/slider3.svg",
    name: "Sushil",
    position: "Developer",
    description:
      "dwowjoijdw d j  oiqjoiqj  hodmo mdiqd oidd jdoid hij   o  i nqiqjd  ojqqndoqoi jdoiqjd jjqoid qpidj qpj oijd  iqdj  pq doi jd q dpq noidjdpiq jpqjpqipq",
  },
  {
    image: "/images/slider/slider3.svg",
    name: "Suraj",
    position: "Developer",
    description:
      " qjoidsjq idhoi hdiufi nfepoQHFQOF H QOWHUFHOWQ POIfhqwjnf fuOHF OI HWIDOIWJ HFWH O odijw pj fdpwok oqwn q8h dlnDPWJQIHW0F  HWI F HW W JPW OM FDLWK MW PFJ-W0JDPWJ QPJ [Ojnjpiwjpwj wp fj lkm  pwjpw j f",
  },
];

const Testimonials = () => {
  return (
    <div className="sm:py-20 flex flex-col gap-[112px] justify-center items-center bg-[#FFFDF8]">
      <div className="flex flex-col gap-7 sm:gap-[80px]">
        <div className="flex flex-col sm:gap-6 gap-5 text-center">
          <p className="font-semibold sm:text-black sm:text-[32px] text-[24px] leading-[120%]">
            What others have to say
          </p>
          <p className="sm:text-base text-sm sm:text-[#172B4D] font-light">
            Feedback that fuels my passion
          </p>
        </div>
        <div className="max-w-[350px] bg-[#FFFDF8] sm:hidden flex">
          <Swiper
            // spaceBetween={20} // Optional: space between slides
            grabCursor={true}
            slidesPerView="auto"
            centeredSlides={true}
            // loop={true} // Optional: infinite loop

            className="testimonial-swiper !bg-[#FFFDF8]"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!bg-[#FFFDF8]">
                <Testimonial
                  description={testimonial.description}
                  image={testimonial.image}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="max-w-[1200px] bg-[#FFFDF8] hidden sm:flex w-fit">
          <Swiper
            spaceBetween={20} // Optional: space between slides
            grabCursor={true}
            slidesPerView={3}
            className="max-w-[1200px] flex justify-between"
            // loop={true} // Optional: infinite loop
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!bg-[#FFFDF8]">
                <Testimonial
                  description={testimonial.description}
                  image={testimonial.image}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
