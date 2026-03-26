/**
 * Returns a numeric priority for sorting colors based on tone.
 * Priorities: Yellow (1), Orange (2), Red (3), Blue (4), Others (5), Invalid (99)
 */
export function getRgbHexPriority(hex?: string): number {
  if (!hex) return 99;

  const { h, l } = convertHexToHSL(hex);

  if (h >= 50 && h <= 60) return 1; // Yellow
  if (h > 30 && h < 50) return 2; // Orange
  if ((h > 0 && h <= 30) || (h === 0 && l !== 0 && h <= 30) || (h >= 330 && h <= 360)) return 3; // Red
  if (h >= 200 && h <= 250) return 4; // Blue

  return 5; // Other tones
}

function convertHexToHSL(hex: string): { h: number; s: number; l: number } {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}
