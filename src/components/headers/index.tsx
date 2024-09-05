"use client";

import React, { useState } from "react";
import GithubIcon from "../icons/Github";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import UnderlineText from "../shared/UnderlineText";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-wrap items-center justify-between w-full p-5 backdrop-blur sticky top-0 z-10 max-w-screen-xl mx-auto">
      <div
        className="text-xl font-semibold cursor-pointer"
        onClick={() => router.push("/")}
      >
        <UnderlineText>AtoZ</UnderlineText>Tools
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-5 text-md font-semibold">
        <li>
          <a
            href="#"
            className="group text-green-600 transition duration-300 font-bold"
          >
            <UnderlineText>Home</UnderlineText>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
          </a>
        </li>
        <li>About</li>
        <li>Contact us</li>
      </ul>

      <div className="flex items-center gap-4">
        <GithubIcon
          width={36}
          height={36}
          onClick={() => router.push("https://github.com/ProgrammingInBlood")}
        />
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
          <a href="#" className="group text-green-600 transition duration-300">
            Link
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
          </a>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      )}
    </header>
  );
}

export default Header;
