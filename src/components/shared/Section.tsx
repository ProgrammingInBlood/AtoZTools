import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  return <div className="my-10 lg:my-20">{children}</div>;
}

export default Section;
