import React, { ReactNode } from "react";
import QrCodeIcon from "../icons/QrCodeIcon";
import Headline from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import SubHeading from "../shared/SubHeading";
import { MagicCard } from "../magicui/magic-card";
import ShimmerButton from "../magicui/shimmer-button";

interface ToolsCardsProps {
  title: string;
  description: string;
  onClick: () => void;
  color?: keyof typeof colorClasses;
  icon: ReactNode;
}

// Define a mapping from color names to Tailwind classes
const colorClasses = {
  green: {
    background: "bg-green-400",
    hover: "hover:bg-green-500",
  },
  blue: {
    background: "bg-blue-400",
    hover: "hover:bg-blue-500",
  },
  red: {
    background: "bg-red-400",
    hover: "hover:bg-red-500",
  },
  yellow: {
    background: "bg-yellow-400",
    hover: "hover:bg-yellow-500",
  },
  purple: {
    background: "bg-purple-400",
    hover: "hover:bg-purple-500",
  },
  pink: {
    background: "bg-pink-400",
    hover: "hover:bg-pink-500",
  },
  orange: {
    background: "bg-orange-400",
    hover: "hover:bg-orange-500",
  },
  teal: {
    background: "bg-teal-400",
    hover: "hover:bg-teal-500",
  },
  indigo: {
    background: "bg-indigo-400",
    hover: "hover:bg-indigo-500",
  },
  gray: {
    background: "bg-gray-400",
    hover: "hover:bg-gray-500",
  },
  // Add more colors as needed
};

function ToolsCards({
  title,
  description,
  onClick,
  color = "green",
  icon,
}: ToolsCardsProps) {
  const classes = colorClasses[color] || colorClasses.green;

  return (
    <div className="lg:w-[48%]">
      <div className="flex items-start gap-5 lg:gap-10">
        <MagicCard
          className="flex  justify-center shadow-2xl p-5 w-fit"
          gradientColor={"#262626"}
        >
          {icon}
        </MagicCard>

        {/* <div className={`p-2 rounded w-fit bg-gray-950/[.01]`}>{icon}</div> */}
        <div>
          <SubHeading>{title}</SubHeading>
          <div>
            <ShimmerButton
              type="button"
              onClick={onClick}
              className="bg-white border-neutral-700"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Try Now
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
      <Paragraph className="text-xl mt-2 text-gray-400">
        {description}
      </Paragraph>
    </div>
  );
}

export default ToolsCards;
