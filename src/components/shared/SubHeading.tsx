import React, { HTMLAttributes } from "react";

function SubHeading({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={"text-2xl sm:text-3xl md:text-4xl font-bold " + className}
      {...props}
    >
      {children}
    </h3>
  );
}

export default SubHeading;
