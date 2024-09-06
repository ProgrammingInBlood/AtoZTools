import React from "react";
import UnderlineText from "../shared/UnderlineText";
import PrimaryButton from "../shared/PrimaryButton";
import { HeroIcon } from "../icons/animated/HeroIcon";

function HeroSection() {
  return (
    <div className="flex flex-col-reverse items-center justify-end md:justify-between gap-12 md:flex-row min-h-[calc(100vh-76px)]">
      <div className=" md:w-1/2 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold lg:text-7xl">
          Your go-to <UnderlineText>toolkit</UnderlineText> for everyday tasks.
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 font-medium">
          From secure passwords to quick conversions, AtoZTools has everything
          you need to get things done faster.
        </p>

        <div className="pt-10">
          <PrimaryButton text="Expore Tools" />
        </div>
      </div>

      <div className="md:w-1/2 w-full max-w-64  min-w-64 sm:max-w-96">
        <HeroIcon />
      </div>
    </div>
  );
}

export default HeroSection;
