import {
  LockKeyholeIcon,
  PaintBucketIcon,
  QrCodeIcon,
  RefreshCcwDotIcon,
  SwatchBookIcon,
} from "lucide-react";

const tools = [
  {
    name: "Qr Code Generator",
    formattedName: { underlineText: "QR Code", title: "Generator" },
    path: "/tools/qr-code-generator",
    icon: QrCodeIcon,
    desciption:
      "A QR code generator creates scannable codes that store data like URLs or contact info, making it easy to share information quickly.",
  },
  {
    name: "Color Code Generator",
    formattedName: { underlineText: "Color Code", title: "Generator" },
    path: "/tools/color-code-generator",
    icon: PaintBucketIcon,
    desciption:
      "A Color Code Generator allows users to create and customize color codes in various formats like HEX, RGB, and HSL.",
  },
  {
    name: "Color Palatte Generator",
    formattedName: { underlineText: "Color Palatte", title: "Generator" },
    path: "/tools/color-palatte-generator",
    icon: SwatchBookIcon,
    desciption:
      "Generate unique and vibrant color palettes instantly for your design needs. Quickly explore and copy distinct color schemes with ease.",
  },
  {
    name: "Password Generator",
    formattedName: { underlineText: "Password", title: "Generator" },
    path: "/tools/password-generator",
    icon: LockKeyholeIcon,
    desciption:
      "A password generator creates strong, random passwords to enhance security for online accounts and sensitive data.",
  },
  {
    name: "Unit Converter",
    formattedName: { underlineText: "Unit", title: "Converter" },
    path: "/tools/unit-converter",
    icon: RefreshCcwDotIcon,
    desciption:
      "This Unit Converter tool allows users to effortlessly convert between various units of measurement, including length, weight, temperature, volume, and speed. ",
  },
];

export default tools;
