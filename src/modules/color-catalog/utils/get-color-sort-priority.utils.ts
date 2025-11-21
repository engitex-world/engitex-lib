import { convertHexToHSL } from './hex-to-hsl.utils';

/**
 * Returns a numeric priority for sorting colors based on tone.
 * Priorities: Yellow (1), Orange (2), Red (3), Blue (4), Others (5), Invalid (99)
 */
export function getColorSortPriorityByHex(hex?: string): number {
  if (!hex) return 99;

  const { h, l } = convertHexToHSL(hex);

  if (h >= 50 && h <= 60) return 1; // Yellow
  if (h > 30 && h < 50) return 2; // Orange
  if ((h > 0 && h <= 30) || (h === 0 && l !== 0 && h <= 30) || (h >= 330 && h <= 360)) return 3; // Red
  if (h >= 200 && h <= 250) return 4; // Blue

  return 5; // Other tones
}
