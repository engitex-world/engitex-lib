import { hexToHsl } from './hex-to-hsl-converter.utils';

// Function to get the color priority based on tone
export function getColorSortingByHexCode(hex?: string): number {
  if (hex) {
    const { h, l } = hexToHsl(hex);

    // Yellow (roughly 50-60 degrees), Red (0-30 or 330-360), Blue (200-250)
    if (h >= 50 && h <= 60) return 1; // Yellow
    if (h > 30 && h < 50) return 2; // Orange
    if ((h > 0 && h <= 30) || (h === 0 && l !== 0 && h <= 30) || (h >= 330 && h <= 360)) return 3; // Red
    if (h >= 200 && h <= 250) return 4; // Blue

    return 5; // Others
  } else {
    return 99;
  }
}
