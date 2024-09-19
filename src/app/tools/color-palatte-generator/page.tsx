"use client";

import { useState, useEffect } from "react";
import chroma from "chroma-js";
import { motion, AnimatePresence } from "framer-motion";
import { generateInitialPalettes } from "@/utils/colorPalatte";

type Palette = string[];

const ColorPaletteGenerator = () => {
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Ensure the palettes are only generated client-side
  useEffect(() => {
    setIsClient(true);
    if (isClient) {
      setPalettes(generateInitialPalettes([]));
    }
  }, [isClient]);

  // Framer Motion animation variants for palette items
  const paletteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const addRandomPalette = () => {
    setPalettes((prevPalettes) => [
      ...prevPalettes,
      ...generateInitialPalettes(palettes),
    ]);
  };

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);

    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  // If not on client, return null to avoid mismatched render
  if (!isClient) return null;

  return (
    <div>
      {copiedColor && (
        <div className="text-center text-green-400 mb-4">
          {copiedColor} copied to clipboard!
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:sm:grid-cols-3 gap-6">
        <AnimatePresence>
          {palettes.map((palette, paletteIndex) => (
            <motion.div
              key={paletteIndex}
              className="flex h-28 md:h-34 transition-transform"
            >
              {palette.map((color, colorIndex) => (
                <motion.div
                  key={colorIndex}
                  className="group first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg flex justify-center items-center grow overflow-hidden cursor-pointer"
                  style={{
                    backgroundColor: color,
                    transition: "all 0.3s ease-in-out",
                    flexGrow: 1,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.flexGrow = "5")}
                  onMouseLeave={(e) => (e.currentTarget.style.flexGrow = "1")}
                  onClick={() => copyToClipboard(color)}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={paletteVariants}
                  transition={{
                    duration: colorIndex / 12,
                    ease: "easeOut",
                  }}
                >
                  <span
                    className="group-hover:visible"
                    style={{
                      color:
                        chroma.contrast(color, "white") > 4.5
                          ? "white"
                          : "black",
                    }}
                  >
                    {color}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded mb-6 hover:bg-green-600 mx-auto block mt-5"
        onClick={addRandomPalette}
      >
        Generate More Palettes
      </button>
    </div>
  );
};

export default ColorPaletteGenerator;
