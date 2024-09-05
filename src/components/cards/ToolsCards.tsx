import React, { ReactNode } from "react";
import QrCodeIcon from "../icons/QrCodeIcon";

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
    <div className="flex items-start gap-10 lg:w-[48%]">
      <div className={`${classes.background} p-2 rounded w-fit`}>{icon}</div>

      <div>
        <h1 className="text-4xl font-semibold">{title}</h1>

        <p className="text-xl mt-2 text-gray-400">{description}</p>

        <div>
          <button
            type="button"
            onClick={onClick}
            className={`${classes.background} ${classes.hover} text-white font-bold py-2 px-4 rounded-lg mt-1`}
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToolsCards;
