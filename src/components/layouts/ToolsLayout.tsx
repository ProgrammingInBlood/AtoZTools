"use client";

import Header from "@/components/headers";
import Container from "@/components/shared/Container";
import UnderlineText from "@/components/shared/UnderlineText";
import { Toaster } from "@/components/ui/toaster";
import tools from "@/constants/tools";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
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
        <div className="mb-10 ">
          <h1 className="text-md md:text-2xl flex items-center gap-1">
            {pathname !== "/tools" && (
              <>
                <span
                  onClick={() => router.push("/tools")}
                  className=" cursor-pointer"
                >
                  <UnderlineText>All</UnderlineText>Tools
                </span>
                <ChevronRight className="mb-1 md:mb-2" />

                <span>
                  <UnderlineText>{underlineText}</UnderlineText>
                  {title}
                </span>
              </>
            )}
          </h1>
        </div>
        {children}
        <Toaster />
      </Container>
    </>
  );
}
