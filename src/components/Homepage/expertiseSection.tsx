const ExpertiesSection = () => {
  return (
    <div className="flex flex-col py-[100px] gap-[120px] text-[#000000]">
      <div className="flex flex-col gap-[100px] text-center w-full items-center">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-4 justify-center">
            <p className="text-[32px] font-semibold">My Expertise</p>
            <p className="font-light text-[#172B4D]">
              Crafting meaningful experiences with these core skills.
            </p>
          </div>
          <div className="sm:grid sm:grid-cols-2 flex flex-col justify-center items-center gap-6  w-full px-[18px] place-items-center max-w-fit">
            <div className="flex items-center rounded-[20px] border border-[#EEEEEE] h-[96px] p-6 gap-5 xl:w-[440px] w-full bg-white">
              <img src="/logos/exp-1.svg" alt="" />
              <p className="sm:text-xl text-sm text-[#172B4D] font-normal">
                User Experience (UX) Design
              </p>
            </div>
            <div className="flex items-center rounded-[20px] border border-[#EEEEEE] h-[96px] p-6 gap-5 xl:w-[440px] w-full bg-white">
              <img src="/logos/exp-2.svg" alt="" />
              <p className="sm:text-xl text-sm  text-[#172B4D] font-normal">
                User Interface (UI) Design
              </p>
            </div>
            <div className="flex items-center rounded-[20px] border border-[#EEEEEE] h-[96px] p-6 gap-5 xl:w-[440px] w-full bg-white">
              <img src="/logos/exp-3.svg" alt="" />
              <p className="sm:text-xl text-sm text-[#172B4D] font-normal">
                Micro interactions
              </p>
            </div>
            <div className="flex items-center rounded-[20px] border border-[#EEEEEE] h-[96px] p-6 gap-5 xl:w-[440px] w-full bg-white">
              <img src="/logos/exp-4.svg" alt="" />
              <p className="sm:text-xl text-sm  text-[#172B4D] font-normal">
                User research
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] sm:gap-[60px] text-center">
          <div className="flex flex-col justify-center items-center gap-6 sm:gap-[24px]">
            <p className="sm:text-[32px] text-[24px] sm:font-semibold text-black leading-[120%]">
              Explore My Resume
            </p>
            <p className="font-light text-sm sm:text-base text-[#172B4D]">
              Learn more about my skills, experience and achievements.
            </p>
          </div>
          <a
            target="_blank"
            href="https://drive.google.com/file/u/0/d/1zd0m1w1HSrEQT-FtKAV2QdxqL7J_JInt/view?usp=drive_link"
          >
            <div className="flex gap-2.5 bg-[#FFB800] py-2.5 sm:py-[15px] px-4 sm:px-6 rounded-xl  sm:rounded-2xl w-max items-center text-center mx-auto hover-gradient active:sm:px-4 active:px-3">
              <p className="font-semibold text-sm sm:text-lg text-[#141414]">
                My Resume
              </p>
              <img src="/icons/arrow-top-black.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpertiesSection;
