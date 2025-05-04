import { useRive } from "@rive-app/react-canvas";

interface Props {
  ref: any;
}

const InfoSection = ({ ref }: Props) => {
  const { RiveComponent } = useRive({
    src: "/orbit_portfolio.riv",
    autoplay: true,
  });
  return (
    <div
      className="w-full flex flex-col justify-center sm:py-[84px] sm:px-[120px]  gap-24 border min-h-screen"
      ref={ref}
    >
      <div className="flex sm:flex-row  flex-col-reverse  justify-between items-center sm:gap-[28px] bg-[FFFDF8]">
        <div className="flex justify-center items-center sm:w-fit w-full gap-[32px]">
          <div className="flex flex-col sm:gap-[44px] gap-[32px]">
            <div className="flex gap-[24px] flex-col">
              <p className=" sm:block hidden font-light leading-6 text-[#172B4D]">
                Hello there 👋
              </p>
              <p className="block sm:hidden font-light leading-6 text-[#172B4D] text-center">
                Hello there I am Sanket 👋
              </p>
              <div className=" sm:block hidden text-[#000000] font-semibold text-[32px] leading-[44.8px]">
                <p>I’m Sanket, a product designer</p>
                <p>Crafting user-Centric design with</p>
                <p>pixel-perfect precision</p>
              </div>
              <div className=" sm:hidden block text-[#000000] font-semibold text-[28px] leading-[150%] text-center">
                <p>Product designer</p>
                <p>Crafting cool digital</p>
                <p>experiences.</p>
              </div>
            </div>
            {/* <div>
              <p className="text-xl leading-[30px] font-light text-[#172B4D]">
                Currently working{" "}
                <span className="font-semibold text-[#000000] italic">
                  @fitpage
                </span>
              </p>
            </div> */}
            <div className="w-full text-center flex sm:justify-start  justify-center items-center">
              <div className="px-6 py-2.5 bg-[#FFB800] rounded-2xl gap-2 flex w-fit hover-gradient active:px-5">
                <p className="text-[#141414] text[18px] leading-[27px] font-semibold">
                  View my work
                </p>
                <img src="/icons/arrow.svg" alt="" className="rotate-90" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:h-[600px] sm:w-[600px] h-[260px]  w-[400px]">
          <RiveComponent />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div>
          <p className="text-[#A8A8B8] font-light text-xl text-center">
            Brands I've worked with
          </p>
        </div>
        <div className="flex justify-center gap-10 bg-[#FFFDF8]">
          <div>
            <img src="/logos/captured.svg" alt="" />
          </div>
          <div>
            <img src="/logos/sakal.svg" alt="" />
          </div>
          <div>
            <img src="/logos/india-running.svg" alt="" />
          </div>
          <div>
            <img src="/logos/wesness.svg" alt="" />
          </div>
          <div>
            <img src="/logos/wnc-navy-half-marathon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
