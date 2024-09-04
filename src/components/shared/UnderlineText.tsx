import React, { HTMLProps, ReactNode } from "react";

interface UnderlineTextProps extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

function UnderlineText({ children, ...props }: UnderlineTextProps) {
  return (
    <span
      className="text-green-500 mx-1 font-extrabold relative inline-block stroke-current"
      {...props}
    >
      {children}
      <svg
        className="absolute bottom-[15%] w-full max-h-1.5"
        viewBox="0 0 55 5"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
          stroke-width="2"
        ></path>
      </svg>
    </span>
  );
}

export default UnderlineText;
