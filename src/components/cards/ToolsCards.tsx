import React from "react";
import QrCodeIcon from "../icons/QrCodeIcon";

function ToolsCards() {
  return (
    <div className="flex items-start gap-10 lg:w-[48%]">
      <div className=" bg-green-400 p-2 rounded w-fit">
        <QrCodeIcon fill="#fff" width={60} height={60} />
      </div>

      <div>
        <h1 className="text-4xl font-semibold">QR Code Genrator</h1>

        <p className=" text-xl mt-2  text-gray-400">
          A QR code generator creates customizable QR codes that store data like
          URLs or contact info. These codes are easily scanned by smartphones,
          making them ideal for quick information sharing in marketing,
          packaging, and events.
        </p>

        <div className="">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg mt-1"
          >
            Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToolsCards;
