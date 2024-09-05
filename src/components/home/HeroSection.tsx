import React from "react";
import UnderlineText from "../shared/UnderlineText";
import PrimaryButton from "../shared/PrimaryButton";
import { HeroIcon } from "../icons/animated/HeroIcon";

function HeroSection() {
  return (
    <div className="flex flex-col items-center md:justify-between gap-12 md:flex-row h-[calc(100vh-76px)] mt-8 md:mt-0">
      <div className=" md:w-1/2 w-full">
        <h1 className="text-6xl font-bold md:text-7xl">
          Your go-to <UnderlineText>toolkit</UnderlineText> for everyday tasks.
        </h1>

        <p className=" text-xl text-gray-500 font-medium">
          From secure passwords to quick conversions, AtoZTools has everything
          you need to get things done faster.
        </p>

        <div className="pt-10">
          <PrimaryButton text="Expore Tools" />
        </div>
      </div>

      <div className="md:w-1/2  w-full min-w-64 max-w-96 md:max-w-full">
        <HeroIcon />
      </div>
    </div>
  );
}

export default HeroSection;
