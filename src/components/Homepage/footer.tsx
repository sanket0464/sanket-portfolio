const Footer = () => {
  return (
    <div className="flex flex-col bg-black sm:px-16 sm:py-16 px-4 py-4 sm:gap-16 gap-10 bg-[url(/images/footer-background-mobile.svg)] sm:bg-[url(/images/footer-background-desktop.svg)] bg-cover bg-no-repeat sm:bg-contain">
      <div className="flex flex-col sm:flex-row gap-[96px] sm:gap-0 pt-[80px] sm:pt-0 justify-between w-full px-[2%]">
        <div className="flex justify-center gap-2 sm:max-w-[350px]  w-full items-center">
          <img src="/icons/star.svg" alt="" />
          <p className="bg-gradient-to-r from-[#FFB800] to-[#FFFFFF] bg-clip-text text-transparent text-2xl font-medium">
            I do magic in pixels...
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-[640px]">
          <p className="font-semibold text-[32px] text-white text-center sm:text-left">
            Ready to kickstart your project with a touch of magic?
          </p>
          <p className="font-light text-[#A4A4A4] text-center sm:text-left">
            Let’s collaborate to create designs that not only look great but
            also deliver real value.
          </p>
          <div className="flex gap-1 sm:gap-3 bg-[#FFB800] py-4 px-6 rounded-2xl w-max items-center mx-auto sm:mx-0 hover-gradient active:sm:gap-1 active:sm:px-4">
            <p className="font-semibold text-lg text-[#141414]">Let's Talk</p>
            <img
              src="/icons/arrow-top-black.svg"
              alt=""
              className="rotate-90"
            />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#6D6D6D] to-transparent"></div>
      <div className="flex justify-between items-center">
        <p className="leading-[18px] font-light text-[#FFFFFF]">
          ©2024 Sanket Patekar • 8554095159
        </p>
        <div className="flex gap-5">
          <div>
            <img src="/logos/gmail.svg" alt="" />
          </div>
          <div>
            <img src="/logos/linkedIn.svg" alt="" />
          </div>
          <div>
            <img src="/logos/behance.svg" alt="" />
          </div>
          <div>
            <img src="/logos/instagram.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
