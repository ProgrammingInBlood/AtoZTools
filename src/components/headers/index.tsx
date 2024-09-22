"use client";
import React, { useState } from "react";
import GithubIcon from "../icons/Github";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import UnderlineText from "../shared/UnderlineText";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import headerPaths from "@/constants/header-paths";

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full backdrop-blur sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between w-full p-5">
        <div
          className="text-xl font-semibold cursor-pointer"
          onClick={() => router.push("/")}
        >
          <UnderlineText>AtoZ</UnderlineText>Tools
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-5 text-md font-semibold">
          {headerPaths.map((route) => {
            if (route.path === pathname) {
              return (
                <ActiveLink key={route.path} href={route.path}>
                  {route.name}
                </ActiveLink>
              );
            } else {
              return (
                <Link key={route.path} href={route.path}>
                  {route.name}
                </Link>
              );
            }
          })}
        </div>

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
          <div className="flex flex-col items-center w-full mt-4 space-y-3 md:hidden">
            {headerPaths.map((route) => {
              if (route.path === pathname) {
                return (
                  <ActiveLink key={route.path} href={route.path}>
                    {route.name}
                  </ActiveLink>
                );
              } else {
                return (
                  <Link key={route.path} href={route.path}>
                    {route.name}
                  </Link>
                );
              }
            })}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

function ActiveLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className="group text-green-600 transition duration-300 font-bold"
      href={href}
    >
      <UnderlineText>{children}</UnderlineText>
    </Link>
  );
}
