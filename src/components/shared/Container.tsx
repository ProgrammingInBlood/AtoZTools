import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
}

export default Container;
