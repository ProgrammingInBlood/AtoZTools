"use client";

import React from "react";
import UnderlineText from "../shared/UnderlineText";
import QrCodeIcon from "../icons/QrCodeIcon";
import ToolsCards from "../cards/ToolsCards";
import PasswordIcon from "../icons/PasswordIcon";
import { useRouter } from "next/navigation";
import ColorIcon from "../icons/ColorIcon";
import ColorPalatteIcon from "../icons/ColorPalatteIcon";
import Headline from "../shared/Heading";
import Paragraph from "../shared/Paragraph";

function ExploreToolsSection() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-10">
        <Headline>
          All the <UnderlineText>Tools</UnderlineText> You Need in One Place
        </Headline>
        <Paragraph>
          A wide range of utilities designed to make your life easier.
        </Paragraph>
      </div>
      <div className="flex flex-wrap justify-between gap-6 flex-grow">
        <ToolsCards
          title="QR Code Genrator"
          description="A QR code generator creates scannable codes that store data like URLs or contact info, making it easy to share information quickly."
          icon={<QrCodeIcon fill="#fff" width={30} height={30} />}
          onClick={() => router.push("/tools/qr-code-generator")}
          color="red"
        />

        <ToolsCards
          title="Password Genrator"
          description="A password generator creates strong, random passwords to enhance security for online accounts and sensitive data."
          icon={<PasswordIcon fill="#fff" width={30} height={30} />}
          onClick={() => router.push("/tools/password-generator")}
          color="yellow"
        />

        <ToolsCards
          title="Color Code Genrator"
          description="A Color Code Generator allows users to create and customize color codes in various formats like HEX, RGB, and HSL."
          icon={<ColorIcon fill="#fff" width={30} height={30} />}
          onClick={() => router.push("/tools/color-code-generator")}
          color="blue"
        />

        <ToolsCards
          title="Color Palatte Genrator"
          description="Generate unique and vibrant color palettes instantly for your design needs. Quickly explore and copy distinct color schemes with ease."
          icon={<ColorPalatteIcon fill="#fff" width={30} height={30} />}
          onClick={() => router.push("/tools/color-palattes-generator")}
          color="orange"
        />
      </div>
    </div>
  );
}

export default ExploreToolsSection;
