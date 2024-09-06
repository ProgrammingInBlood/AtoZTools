import React, { HTMLAttributes } from "react";

function Headline({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={"text-4xl sm:text-5xl md:text-6xl font-bold " + className}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Headline;
