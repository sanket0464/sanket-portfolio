import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./testimonial";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

const testimonials = [
  {
    image: "/images/monkey-space.png",
    name: "Monkey Space",
    position: "Client",
    description:
      " Sanket delivered more than just a website, he created something that truly reflects my identity as a DJ. He nailed it within a tight deadline, and it’s already helping me grow and connect with more fans.",
  },
  {
    image: "/images/designer.png",
    name: "Saiesh Volvoikar",
    position: "Product designer",
    description:
      "Sanket’s journey from intern to key contributor on one of our recent project that we worked together, while I focused on B2C, he took complete ownership of the B2B dashboard that genuinely understood business users. A thoughtful and dependable teammate.",
  },
  {
    image: "/images/product.svg",
    name: "Saahil Alva",
    position: "Product and Strategy",
    description:
      "I've had the pleasure of working with Sanket on multiple web projects, and I can confidently say he's one of the most reliable and talented designers I’ve collaborated with. His ability to understand the vision behind a product and translate it into clean, intuitive, and visually compelling designs is exceptional. Sanket brings not just great aesthetics to the table but also a deep understanding of user experience and functionality. He’s responsive, open to feedback, and always delivers on time.",
  },
];

const Testimonials = () => {
  return (
    <div className="sm:py-20 flex flex-col gap-[112px] justify-center items-center bg-[#FFFDF8]">
      <div className="flex flex-col gap-7 sm:gap-[64px]">
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

            className="testimonial-swiper !bg-[#FFFDF8]
"
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
        {/* bg-[#FFFDF8] */}
        <div className="hidden sm:flex justify-center items-center w-full relative">
          <div
            className="absolute w-[598px] h-[70%] mt-[70px] top-auto bottom-auto z-[30] scale-[104%] bg-[#F7F7F7] bg-opacity-100 shadow-[0px_4px_64px_0px_#00000014]
  rounded-[16px]"
          ></div>
          <div
            className="absolute w-[608px] h-[60%] mt-[80px] top-auto bottom-auto z-[20] scale-[107%] bg-[#F3F3F3] bg-opacity-100 shadow-[0px_4px_64px_0px_#00000014]
  rounded-[16px]"
          ></div>
          <div className="bg-[#FFFDF8] w-[588px]  pt-[80px] overflow-hidden">
            <Swiper
              spaceBetween={0}
              grabCursor={true}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              allowTouchMove={true}
              simulateTouch={true}
              modules={[Autoplay]}
              loop
              pagination={{ clickable: true }}
              className="w-full !overflow-visible !z-[90]"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="!bg-[#FFFDF8] !rounded-[16px]"
                >
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
    </div>
  );
};

export default Testimonials;
