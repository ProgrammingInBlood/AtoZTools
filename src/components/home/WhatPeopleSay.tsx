import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Headline from "../shared/Heading";
import Paragraph from "../shared/Paragraph";
import UnderlineText from "../shared/UnderlineText";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "AtoZTools is an absolute game-changer. The password generator is my favorite, it's quick and reliable!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I can't believe how easy it is to generate QR codes and convert images in seconds. AtoZTools is phenomenal!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "As someone who works with a lot of online tools, AtoZTools is the most efficient platform I’ve used. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The MD5 hash generator is super useful for my work, and the interface is so intuitive. AtoZTools is a must-have!",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "AtoZTools stands out because of its wide range of tools. I use the image converter all the time, and it's a lifesaver!",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "The attention to detail on AtoZTools is amazing. Every tool works flawlessly, from password generation to QR code creation.",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "I've been using AtoZTools for weeks, and it has simplified so many tasks, from hashing to image conversion. Love it!",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Ethan",
    username: "@ethan",
    body: "It's not just the design, it's the seamless experience. AtoZTools makes everyday tasks so much easier. Kudos to the team!",
    img: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    name: "Chloe",
    username: "@chloe",
    body: "From password security to file conversion, everything on AtoZTools is top-notch. I’m truly impressed!",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Liam",
    username: "@liam",
    body: "AtoZTools has everything I need in one place. It’s easy, efficient, and saves me so much time.",
    img: "https://randomuser.me/api/portraits/men/74.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl  p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function WhatPeopleSay() {
  return (
    <div>
      <Headline className="text-center">What People Are Saying</Headline>
      <Paragraph className="text-center max-w-lg mx-auto">
        Don’t just take our word for it. Here’s what real users are saying about
        <UnderlineText>AtoZTools.</UnderlineText>
      </Paragraph>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
