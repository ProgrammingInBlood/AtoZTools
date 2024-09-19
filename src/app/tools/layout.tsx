"use client";

import Header from "@/components/headers";
import Container from "@/components/shared/Container";
import UnderlineText from "@/components/shared/UnderlineText";
import { Toaster } from "@/components/ui/toaster";
import tools from "@/constants/tools";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const { underlineText, title } = useMemo(() => {
    const currentTool = tools.find((tool) => tool.path === pathname);

    if (currentTool) {
      return currentTool.formattedName;
    } else {
      if (pathname === "/tools") {
        return { underlineText: "All", title: "Tools" };
      } else {
        return { underlineText: "", title: "" };
      }
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Container>
        <div className="mb-10 mt-5">
          <h1 className="text-2xl md:text-6xl">
            <UnderlineText>{underlineText}</UnderlineText> {title}
          </h1>
        </div>
        {children}
        <Toaster />
      </Container>
    </>
  );
}
