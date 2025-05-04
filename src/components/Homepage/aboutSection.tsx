import { images } from "../../constants/constant";
import ImageSlider from "./imagesSlider";
interface Props {
  ref: any;
}
const AboutSection = ({ ref }: Props) => {
  return (
    <div
      className="bg-[#101010]  bg-[url('/images/background-about-mobile.svg')] sm:bg-[url('/images/background-about-desktop.svg')] bg-cover bg-no-repeat flex flex-col justify-around aspect-[1440/933] py-[40px] sm:py-0 gap-[60px]"
      ref={ref}
    >
      <div className="flex w-full sm:flex-row flex-col-reverse gap-[70px] sm:gap-0 px-[16px]">
        <div className="sm:w-1/2 flex flex-col gap-[46px] text-center sm:text-left sm:pl-[80px]">
          <p className="text-[#FFFFFF] text-[32px] font-semibold sm:block hidden">
            About me
          </p>
          <p className=" font-light text-white">
            Hello, I’m Sanket Patekar, an IT engineer turned product designer.
            My journey began during my college days, working on creative and fun
            websites for various projects. This sparked my interest in the world
            of design, and it has been a journey of creativity ever since.
          </p>
          <p className=" font-light text-white">
            Combining my technical background with a creative mindset, I now
            specialise in crafting seamless, user centred digital experiences,
            solving problems through design and creating solutions that truly
            connect with users.
          </p>
          <div className="flex gap-2 justify-start overflow-x-auto flex-nowrap px-2">
            {[
              { icon: "/icons/about1.png", text: "Engineer by degree" },
              { icon: "/icons/about2.png", text: "Creative by nature" },
              { icon: "/icons/about3.svg", text: "Designer by profession" },
            ].map(({ icon, text }, idx) => (
              <div
                key={idx}
                className="bg-[#202020] border border-[#292929] rounded-lg p-2 sm:p-3 flex items-center gap-2 text-xs sm:text-base min-w-[162px] h-[40px] sm:h-fit shrink-0"
              >
                <img src={icon} alt="" className="w-5 h-5 object-contain" />
                <p className="font-medium text-sm text-white">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center items-center relative  w-[90%] mx-auto pt-2.5 sm:pl-[60px]">
          {/* First Image */}

          <div className="sm:w-[204px] sm:h-[245px] w-[147.60px] h-[177.13px] bg-gray-300 rounded-xl shadow-lg rotate-0 border-[#1C1C1C] border-[6px] left-12 top-12 drop-shadow-2xl overflow-hidden">
            <img
              src="/images/about1.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* Second Image - Rotated */}
          <div className="sm:w-[204px] sm:h-[245px] w-[147.60px] h-[177.130px] bg-gray-300 rounded-xl shadow-[10px_10px_0_0_#000000] border-[#1C1C1C] border-[6px]  -rotate-[11.06deg] sm:left-60 mt-[-40px] ml-[-16px] drop-shadow-2xl overflow-hidden z-10">
            <img
              src="/images/about2.svg"
              alt=""
              className="w-full h-full object-cover"
            />
            slidesPerView={3}
          </div>
        </div>
        <div className="sm:hidden flex w-full justify-center text-center items-center">
          <p className="font-semibold text-2xl leading-[120%] text-white">
            About Me
          </p>
        </div>
      </div>

      <div className="flex sm:gap-[60px] gap-[42px] flex-col sm:px-[80px]">
        <div className="flex justify-center gap-2">
          <img src="/icons/star.svg" alt="" />
          <p className="bg-gradient-to-r from-[#FFB800] to-[#FFFFFF] bg-clip-text text-transparent">
            BECAUSE THERE'S MUCH MORE TO LIFE
          </p>
        </div>
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default AboutSection;
