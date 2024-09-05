"use client";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function ColorPickerPage() {
  const [color, setColor] = useColor("rgb(86 30 203)");

  return (
    <div className="p-5">
      <ColorPicker color={color} onChange={setColor} />
    </div>
  );
}
