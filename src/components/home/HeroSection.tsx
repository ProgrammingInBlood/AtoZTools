import React from "react";
import UnderlineText from "../shared/UnderlineText";
import PrimaryButton from "../shared/PrimaryButton";
import { HeroIcon } from "../icons/animated/HeroIcon";
import Headline from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import Particles from "../magicui/particles";

function HeroSection() {
  return (
    <div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <div className="flex flex-col-reverse items-center justify-end md:justify-between gap-12 md:flex-row md:min-h-[calc(100vh-76px)]">
        <div className=" md:w-1/2 w-full">
          <Headline>
            Your go-to <UnderlineText>toolkit</UnderlineText> for everyday
            tasks.
          </Headline>

          <Paragraph>
            From secure passwords to quick conversions, AtoZTools has everything
            you need to get things done faster.
          </Paragraph>

          <div className="pt-10">
            <PrimaryButton text="Expore Tools" />
          </div>
        </div>

        <div className="md:w-1/2 w-full max-w-64  min-w-64 sm:max-w-96 md:max-w-full">
          <HeroIcon />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
