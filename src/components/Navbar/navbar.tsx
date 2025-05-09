import { useState } from "react";
import type { RefObject } from "react";

interface Props {
  infoRef: RefObject<HTMLElement>;
  workRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
}

const Navbar = ({ aboutRef, infoRef, workRef }: Props) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const scrollToRef = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setShowHamburgerMenu(false); // Close menu on mobile
  };

  return (
    <div className=" top-0 left-0 w-full bg-white shadow-md px-4 sm:px-[120px] py-3 h-[56px] sm:h-[70px] border-b border-gray-200 z-[100]  sticky">
      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center justify-between h-full">
        <img src="/logos/logo.svg" alt="Logo" className="h-full w-auto" />

        <button
          onClick={() => setShowHamburgerMenu((prev) => !prev)}
          className="p-2"
        >
          <img
            src="/icons/hamburger.svg"
            alt="Menu"
            className="w-6 h-6 object-contain"
          />
        </button>

        {showHamburgerMenu && (
          <div className="absolute right-4 top-16 bg-white rounded-lg shadow-xl min-w-[150px] p-4 flex flex-col gap-4 z-50 animate-fade-in">
            <button
              onClick={() => scrollToRef(infoRef)}
              className="text-[#172B4D] hover:underline hover:font-medium transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToRef(workRef)}
              className="text-[#172B4D] hover:underline hover:font-medium transition"
            >
              My Works
            </button>
            <button
              onClick={() => scrollToRef(aboutRef)}
              className="text-[#172B4D] hover:underline hover:font-medium transition"
            >
              About
            </button>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-between items-center h-full">
        <img src="/logos/logo.svg" alt="Logo" className="h-full w-auto" />
        <div className="flex items-center gap-16">
          <nav className="flex gap-12">
            <button
              onClick={() => scrollToRef(infoRef)}
              className="text-[#172B4D] hover:underline hover:font-medium transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToRef(workRef)}
              className="text-[#172B4D] hover:underline hover:font-medium transition"
            >
              My Works
            </button>
            <button
              onClick={() => scrollToRef(aboutRef)}
              className="text-[#172B4D] hover:underline hover:font-medium transition"
            >
              About
            </button>
          </nav>
          <div className="">
            <button
              className="bg-[#FFB800] px-6 py-2.5 rounded-lg flex items-center gap-2 hover:brightness-110 transition"
              onClick={() => setShowContactInfo((prev) => !prev)}
            >
              <span className="font-medium text-sm text-[#141414]">
                Contact Me
              </span>
              <img src="/icons/arrow.svg" alt="Arrow" />
            </button>
            <div
              className={`${
                showContactInfo ? "absolute" : "hidden"
              } flex flex-col mx-5 w-full max-w-[520px] bg-white rounded-[16px] shadow-[0px_0px_20px_0px_#0000001F] right-[100px] top-20
`}
            >
              <div className="p-5 font-medium text-[20px] text-black flex justify-between items-center  border-b border-[#E8E8E8] ">
                <p>Sanket Patekar</p>
                <img
                  src="/icons/cross.svg"
                  alt=""
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => setShowContactInfo((prev) => !prev)}
                />
              </div>
              <div className="p-5">
                <p className="text-base text-black">Contact Info</p>
              </div>
              <div className="flex p-5 gap-4 items-center ">
                <img
                  src="/icons/resume.svg"
                  alt=""
                  className="w-[38px] aspect-square"
                />
                <div className="flex flex-col justify-between gap-1">
                  <p className="text-[#667085] font-medium text-sm">Resume</p>
                  <a
                    href="https://drive.google.com/file/u/0/d/1zd0m1w1HSrEQT-FtKAV2QdxqL7J_JInt/view?usp=drive_link"
                    target="_blank"
                  >
                    <p className="font-medium underline decoration-[#0B66C2] text-[#0B66C2] text-sm flex gap-1">
                      Sanket_Patekar_Resume.pdf{" "}
                      <img src="/icons/download.svg" alt="" className="w-4" />
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex p-5 gap-4 items-center">
                <img
                  src="/icons/email.svg"
                  alt=""
                  className="w-[38px] aspect-square"
                />
                <div className="flex flex-col justify-between gap-1">
                  <p className="text-[#667085] font-medium text-sm">Email</p>
                  <a href="mailto:sanketpatekar85540@gmail.com" target="_blank">
                    <p className="font-medium underline decoration-[#0B66C2] text-[#0B66C2] text-sm">
                      sanketpatekar85540@gmail.com
                      {/* <img src="/icons/download.svg" alt="" className="w-4" /> */}
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex p-5 gap-4 items-center">
                <img
                  src="/icons/phone.svg"
                  alt=""
                  className="w-[38px] aspect-square"
                />
                <div className="flex flex-col justify-between gap-1">
                  <p className="text-[#667085] font-medium text-sm">Phone</p>
                  <a href="tel:+918554095159">
                    <p className="font-medium text-black text-sm">
                      8554095159
                      {/* <img src="/icons/download.svg" alt="" className="w-4" /> */}
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex p-5 gap-4 items-center">
                <img
                  src="/icons/linkedIn.svg"
                  alt=""
                  className="w-[38px] aspect-square"
                />
                <div className="flex flex-col justify-between gap-1">
                  <p className="text-[#667085] font-medium text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/sanket-patekar-411599250/"
                    target="_blank"
                  >
                    <p className="font-medium underline decoration-[#0B66C2] text-[#0B66C2] text-sm">
                      https://www.linkedin.com/in/sanket-patekar-411599250/
                      {/* <img src="/icons/download.svg" alt="" className="w-4" /> */}
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex p-5 gap-4 items-center">
                <img
                  src="/icons/behance.svg"
                  alt=""
                  className="w-[38px] aspect-square"
                />
                <div className="flex flex-col justify-between gap-1">
                  <p className="text-[#667085] font-medium text-sm">Behance</p>
                  <a
                    href="https://www.behance.net/sanketpatekar1"
                    target="_blank"
                  >
                    <p className="font-medium underline decoration-[#0B66C2] text-[#0B66C2] text-sm">
                      https://www.behance.net/sanketpatekar1
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
