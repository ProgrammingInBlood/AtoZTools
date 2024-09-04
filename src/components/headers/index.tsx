import React, { useState } from "react";
import GithubIcon from "../icons/Github";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import UnderlineText from "../shared/UnderlineText";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-wrap items-center justify-between w-full p-5 backdrop-blur sticky top-0 z-10">
      <div className="text-xl font-semibold">
        <UnderlineText>AtoZ</UnderlineText>Tools
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-5">
        <a href="#" className="group text-sky-600 transition duration-300">
          Link
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <li>About</li>
        <li>Contact us</li>
      </ul>

      <div className="flex items-center gap-4">
        <GithubIcon width={36} height={36} />
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center w-full mt-4 space-y-3 md:hidden">
          <a href="#" className="group text-sky-600 transition duration-300">
            Link
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </a>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      )}
    </header>
  );
}

export default Header;
