"use client";

import Header from "@/components/headers";
import Container from "@/components/shared/Container";
import UnderlineText from "@/components/shared/UnderlineText";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const { underlineTitle, title } = useMemo(() => {
    if (pathname === "/tools/password-generator") {
      return { underlineTitle: "Password", title: "Genrator" };
    } else if (pathname === "/tools/color-code-generator") {
      return { underlineTitle: "Color Code", title: "Genrator" };
    } else if (pathname === "/tools/qr-code-generator") {
      return { underlineTitle: "QR Code", title: "Genrator" };
    } else {
      return { underlineTitle: "", title: "" };
    }
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="mb-10 mt-5">
          <h1 className="text-2xl md:text-6xl">
            <UnderlineText>{underlineTitle}</UnderlineText> {title}
          </h1>
        </div>
        {children}
      </Container>
    </>
  );
}
