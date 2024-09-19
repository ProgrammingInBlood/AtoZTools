import {
  CodeIcon,
  GlobeIcon,
  ImageIcon,
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
  {
    name: "Image Compressor",
    formattedName: { underlineText: "Image", title: "Compressor" },
    path: "/tools/image-compressor",
    icon: ImageIcon,
    desciption:
      "An Image Compressor tool helps users reduce the size of their image files while maintaining quality, making it ideal for faster uploads and optimized storage.",
  },
  {
    name: "JSON Formatter/Validator",
    formattedName: { underlineText: "JSON", title: "Formatter/Validator" },
    path: "/tools/json-formatter-validator",
    icon: CodeIcon,
    desciption:
      "A JSON Formatter and Validator tool helps users format and validate their JSON data, ensuring it follows the correct structure and syntax.",
  },
  {
    name: "IP Address Lookup",
    formattedName: { underlineText: "IP Address", title: "Lookup" },
    path: "/tools/ip-address-lookup",
    icon: GlobeIcon,
    desciption:
      "An IP Address Lookup tool provides detailed information about an IP address, including geolocation data and network information.",
  },
];

export default tools;
