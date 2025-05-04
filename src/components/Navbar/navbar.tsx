import { useState } from "react";
import type { RefObject } from "react";

interface Props {
  infoRef: RefObject<HTMLElement>;
  workRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
}

const Navbar = ({ aboutRef, infoRef, workRef }: Props) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const scrollToRef = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setShowHamburgerMenu(false); // Close menu on mobile
  };

  return (
    <header className=" top-0 left-0 w-full z-50 bg-white shadow-md px-4 sm:px-[120px] py-3 h-[56px] sm:h-[70px] border-b border-gray-200">
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
          <button className="bg-[#FFB800] px-6 py-2.5 rounded-lg flex items-center gap-2 hover:brightness-110 transition">
            <span className="font-medium text-sm text-[#141414]">
              Contact Me
            </span>
            <img src="/icons/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
