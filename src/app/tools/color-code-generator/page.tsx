"use client";

import { useState } from "react";
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";

export default function ColorPickerPage() {
  const [color, setColor] = useState({
    hex: "#561ecb",
    rgb: {
      r: 86,
      g: 30,
      b: 203,
      a: 1,
    },
    hsv: {
      h: 259.4219653179191,
      s: 85.22167487684729,
      v: 79.6078431372549,
      a: 1,
    },
  });

  return (
    <div className="p-5">
      <ColorPicker color={color} onChange={setColor} />
    </div>
  );
}
