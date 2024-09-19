import React, { ReactNode } from "react";
import Paragraph from "../shared/Paragraph";
import SubHeading from "../shared/SubHeading";
import { MagicCard } from "../magicui/magic-card";
import ShimmerButton from "../magicui/shimmer-button";
import { cn } from "@/lib/utils";

interface ToolsCardsProps {
  title: string;
  description: string;
  onClick: () => void;
  icon: ReactNode;
  full?: boolean;
}

function ToolsCards({
  title,
  description,
  onClick,
  icon,
  full,
}: ToolsCardsProps) {
  return (
    <div className={cn(!full && "lg:w-[48%]")}>
      <div className="flex items-start gap-4">
        <MagicCard
          className="flex  justify-center shadow-2xl p-5 w-fit"
          gradientColor={"#262626"}
        >
          {icon}
        </MagicCard>

        {/* <div className={`p-2 rounded w-fit bg-gray-950/[.01]`}>{icon}</div> */}
        <div className="mt-1">
          <SubHeading>{title}</SubHeading>
          <div>
            <ShimmerButton
              type="button"
              onClick={onClick}
              className="bg-white border-neutral-700 h-8"
            >
              <span className=" mt-1 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
