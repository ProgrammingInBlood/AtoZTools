import chroma from "chroma-js";

type Palette = string[];

const generateDistinctColor = (palettes: Palette[]): string => {
  let color: string;
  do {
    color = chroma.random().hex();
  } while (palettes.some((palette) => palette.includes(color))); // Avoid duplicates in existing palettes
  return color;
};

export const generateInitialPalettes = (palettes: Palette[]): Palette[] => {
  return Array(10)
    .fill(null)
    .map(() =>
      Array(5)
        .fill(null)
        .map(() => generateDistinctColor(palettes))
    );
};
