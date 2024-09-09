import React from "react";
import SparklesText from "../magicui/sparkles-text";
import Paragraph from "../shared/Paragraph";
import { MagicCard } from "../magicui/magic-card";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import SubHeading from "../shared/SubHeading";
import UnderlineText from "../shared/UnderlineText";

function HowItWorks() {
  return (
    <div>
      <SparklesText
        text="How AtoZTools Works"
        className=" text-center text-3xl sm:text-4xl md:text-6xl"
      />
      <Paragraph className=" text-center">
        Simplified steps to use each tool.
      </Paragraph>

      <div className="flex gap-5 mt-10  justify-center flex-wrap">
        <StepCard
          buttonText="Step 1"
          heading="Choose a"
          underlineText="Tool"
          paragraph="Browse through the 100+ tools available, each designed for a specific
          task. Whether you need a password generator, image converter, or a QR
          code creator, we’ve got you covered."
        />
        <StepCard
          buttonText="Step 2"
          heading="Input Your"
          underlineText="Data"
          paragraph="Once you’ve selected a tool, simply enter the required data or upload a file, depending on what the tool needs. Customize any settings if applicable."
        />
        <StepCard
          buttonText="Step 3"
          heading="Get Instant"
          underlineText="Results"
          paragraph={`Hit "Generate," "Convert," or "Calculate" — and see the magic happen. Your results will be ready instantly, and you can download, copy, or share them as needed.`}
        />
      </div>
    </div>
  );
}

interface StepCardProps {
  buttonText: string;
  heading: string;
  paragraph: string;
  underlineText: string;
}

function StepCard({
  buttonText,
  heading,
  paragraph,
  underlineText,
}: StepCardProps) {
  return (
    <MagicCard className="h-auto lg:w-[30%]">
      <div className="flex p-5 ">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="mt-1">✨ {buttonText}</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      <div className=" p-5">
        <SubHeading className="md:text-2xl">
          {heading} <UnderlineText>{underlineText}</UnderlineText>
        </SubHeading>
        <Paragraph>{paragraph}</Paragraph>
      </div>
    </MagicCard>
  );
}

export default HowItWorks;
