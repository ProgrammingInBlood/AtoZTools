import React from "react";
import UnderlineText from "../shared/UnderlineText";
import QrCodeIcon from "../icons/QrCodeIcon";
import PrimaryButton from "../shared/PrimaryButton";
import ToolsCards from "../cards/ToolsCards";

function ExploreToolsSection() {
  return (
    <div className="p-5 pt-16 ">
      <div className="mb-10">
        <h1 className="text-6xl">
          Our <UnderlineText>Tools</UnderlineText>
        </h1>
      </div>
      <div className="flex flex-wrap justify-between gap-6">
        <ToolsCards />
        <ToolsCards />
        <ToolsCards />
        <ToolsCards />
      </div>
    </div>
  );
}

export default ExploreToolsSection;
