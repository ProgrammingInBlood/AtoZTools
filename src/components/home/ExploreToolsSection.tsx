"use client";

import React from "react";
import UnderlineText from "../shared/UnderlineText";
import QrCodeIcon from "../icons/QrCodeIcon";
import ToolsCards from "../cards/ToolsCards";
import PasswordIcon from "../icons/PasswordIcon";
import { useRouter } from "next/navigation";
import ColorIcon from "../icons/ColorIcon";

function ExploreToolsSection() {
  const router = useRouter();
  return (
    <div className="pt-16 ">
      <div className="mb-10">
        <h1 className="text-6xl">
          Our <UnderlineText>Tools</UnderlineText>
        </h1>
      </div>
      <div className="flex flex-wrap justify-between gap-6">
        <ToolsCards
          title="QR Code Genrator"
          description="A QR code generator creates scannable codes that store data like URLs or contact info, making it easy to share information quickly."
          icon={<QrCodeIcon fill="#fff" width={60} height={60} />}
          onClick={() => router.push("/tools/qr-code-generator")}
          color="red"
        />

        <ToolsCards
          title="Password Genrator"
          description="A password generator creates strong, random passwords to enhance security for online accounts and sensitive data."
          icon={<PasswordIcon fill="#fff" width={60} height={60} />}
          onClick={() => router.push("/tools/password-generator")}
          color="yellow"
        />

        <ToolsCards
          title="Color Code Genrator"
          description="A Color Code Generator allows users to create and customize color codes in various formats like HEX, RGB, and HSL."
          icon={<ColorIcon fill="#fff" width={60} height={60} />}
          onClick={() => router.push("/tools/color-code-generator")}
          color="blue"
        />

        <ToolsCards
          title="QR Code Genrator"
          description=" A QR code generator creates customizable QR codes that store data like
          URLs or contact info. These codes are easily scanned by smartphones,
          making them ideal for quick information sharing in marketing,
          packaging, and events."
          icon={<QrCodeIcon fill="#fff" width={60} height={60} />}
          onClick={() => router.push("/tools/qr-code-generator")}
          color="orange"
        />
      </div>
    </div>
  );
}

export default ExploreToolsSection;
