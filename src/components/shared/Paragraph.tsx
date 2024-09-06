import React, { HTMLAttributes } from "react";

function Paragraph({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={"text-lg sm:text-xl text-gray-500 font-medium " + className}
      {...props}
    >
      {children}
    </p>
  );
}

export default Paragraph;
