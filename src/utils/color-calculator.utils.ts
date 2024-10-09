import { ColorIntensityType, ColorToneType } from '../enums';

export function evaluateColor(hex: string) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  // Calculate brightness based on common formula
  let brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determine intensity
  let intensity: ColorIntensityType;
  if (brightness < 85) {
    intensity = ColorIntensityType.DARK;
  } else if (brightness < 170) {
    intensity = ColorIntensityType.MEDIUM;
  } else {
    intensity = ColorIntensityType.LIGHT;
  }

  // Determine tone by comparing RGB values
  let max = Math.max(r, g, b);
  let tone: ColorToneType | undefined;
  if (max === r && max === g) {
    tone = ColorToneType.YELLOW;
  } else if (max === r && max === b) {
    // MAGENTA case removed
    tone = ColorToneType.PINK;
  } else if (max === g && max === b) {
    // TURQUOISE case removed
    tone = ColorToneType.BLUE;
  } else if (max === r) {
    if (b > g) {
      tone = ColorToneType.PINK;
    } else if (g / r > 0.5 && b / r < 0.5) {
      tone = ColorToneType.ORANGE;
    } else {
      tone = ColorToneType.RED;
    }
  } else if (max === g) {
    if (r > b && b / r < 0.5) {
      tone = ColorToneType.YELLOW;
    } else if (b / g > 0.5) {
      tone = ColorToneType.BLUE;
    } else {
      tone = ColorToneType.GREEN;
    }
  } else if (max === b) {
    if (r > g) {
      tone = ColorToneType.PURPLE;
    } else {
      tone = ColorToneType.BLUE;
    }
  }

  // Special case for non-dominant colors (near grayscale)
  if (Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && Math.abs(r - b) < 15) {
    if (max < 85) {
      tone = ColorToneType.BLACK;
    } else if (max < 170) {
      tone = ColorToneType.GRAY;
    } else {
      tone = ColorToneType.WHITE;
    }
  }

  return { intensity, tone };
}
