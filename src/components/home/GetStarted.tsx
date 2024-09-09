import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import {
  FaShieldAlt,
  FaChartBar,
  FaRss,
  FaHeart,
  FaGlobe,
  FaFileAlt,
  FaCloud,
  FaUserShield,
  FaLock,
  FaKey,
  FaWifi,
  FaCamera,
} from "react-icons/fa";
import Headline from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import SubHeading from "../shared/SubHeading";
import ShimmerButton from "../magicui/shimmer-button";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

// Define the icon data with colors and glow
const icons = [
  { icon: FaShieldAlt, color: "text-red-500", glow: "shadow-red-500/30" },
  { icon: FaGlobe, color: "text-blue-500", glow: "shadow-blue-500/30" },
  { icon: FaRss, color: "text-yellow-500", glow: "shadow-yellow-500/30" },
  { icon: FaHeart, color: "text-pink-500", glow: "shadow-pink-500/30" },
  { icon: FaFileAlt, color: "text-green-500", glow: "shadow-green-500/30" },
  { icon: FaChartBar, color: "text-purple-500", glow: "shadow-purple-500/30" },
  { icon: FaCloud, color: "text-teal-500", glow: "shadow-teal-500/30" }, // Added
  {
    icon: FaUserShield,
    color: "text-indigo-500",
    glow: "shadow-indigo-500/30",
  }, // Added
  { icon: FaLock, color: "text-orange-500", glow: "shadow-orange-500/30" }, // Added
  { icon: FaKey, color: "text-cyan-500", glow: "shadow-cyan-500/30" }, // Added
  { icon: FaWifi, color: "text-pink-600", glow: "shadow-pink-600/30" }, // Added
  { icon: FaCamera, color: "text-yellow-600", glow: "shadow-yellow-600/30" }, // Added
];

const IconCard = ({
  icon: Icon,
  color,
  glow,
}: {
  icon: React.ElementType;
  color: string;
  glow: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-20 h-20 flex items-center justify-center overflow-hidden rounded-xl mx-4"
      )}
    >
      <Icon className={`${color} ${glow}`} size={32} />
    </div>
  );
};

export function GetStartedSection() {
  return (
    <div className="relative">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background  md:shadow-xl">
        <Marquee reverse className="[--duration:20s]">
          {icons.map((icon, index) => (
            <IconCard key={index} {...icon} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:30s]">
          {icons.map((icon, index) => (
            <IconCard key={index} {...icon} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:40s]">
          {icons.map((icon, index) => (
            <IconCard key={index} {...icon} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:50s]">
          {icons.map((icon, index) => (
            <IconCard key={index} {...icon} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        <div className="pointer-events-none absolute bottom-0 w-full h-full bg-gradient-to-t from-white dark:from-background"></div>
      </div>
      <div className="absolute z-10 text-center bottom-[15%] flex-col justify-center items-center w-full">
        <SubHeading className="text-white text-3xl font-bold">
          Stop wasting time with complex tools.
        </SubHeading>
        <Paragraph className="text-white max-w-lg mx-auto mt-2">
          Use our 100+ free tools to get things done faster. No sign-ups, no
          credit cards — just results.
        </Paragraph>

        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 w-fit mx-auto mt-2"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="mt-1">✨ Get Started Now</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
    </div>
  );
}
