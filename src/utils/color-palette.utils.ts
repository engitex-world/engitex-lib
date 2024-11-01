import { ColorIntensityType, ColorToneType } from '../enums/color.enum';

export const COLOR_PRODUCT_PALETTE = [
  '#FFFF00', // Yellow
  '#FF0000', // Red
  '#0000FF', // Blue
  '#000000', // Black
  '#FFA500', // Orange
  '#EE82EE', // Violet
  '#40E0D0', // Turquoise
  '#FFFFFF', // White
];

export const COLOR_TONES_PALETTE = [
  { type: ColorToneType.RED, shades: ['#FFCDD2', '#E57373', '#B71C1C'] }, // Light, Medium, Dark Red
  { type: ColorToneType.ORANGE, shades: ['#FFE0B2', '#FFB74D', '#E65100', 'FF5F1F'] }, // Light, Medium, Dark Orange
  { type: ColorToneType.YELLOW, shades: ['#FFF9C4', '#FFF176', '#F57F17', '#FFFF33'] }, // Light, Medium, Dark Yellow
  { type: ColorToneType.GREEN, shades: ['#C8E6C9', '#81C784', '#1B5E20', '#74EE15'] }, // Light, Medium, Dark Green
  { type: ColorToneType.BLUE, shades: ['#BBDEFB', '#64B5F6', '#0D47A1'] }, // Light, Medium, Dark Blue
  { type: ColorToneType.PURPLE, shades: ['#E1BEE7', '#BA68C8', '#4A148C'] }, // Light, Medium, Dark Purple
  { type: ColorToneType.PINK, shades: ['#F8BBD0', '#F06292', '#880E4F'] }, // Light, Medium, Dark Pink
  { type: ColorToneType.BROWN, shades: ['#BCA89F', '#765341', '#3D251E'] }, // Light, Medium, Dark Brown
  { type: ColorToneType.GRAY, shades: ['#F5F5F5', '#BDBDBD', '#696969'] }, // Light, Medium, Dark Gray
  { type: ColorToneType.BLACK, shades: ['#000000'] }, // Single shade of Black
  { type: ColorToneType.WHITE, shades: ['#FFFFFF', '#FFFFE6'] }, // Pure White and Ecru White
];

export function getTonesPalette() {
  const darkShades: string[] = [];
  const mediumShades: string[] = [];
  const lightShades: string[] = [];
  const fluorShades: string[] = [];

  COLOR_TONES_PALETTE.forEach((color) => {
    const [light, medium, dark, fluor] = color.shades;

    if (dark) darkShades.push(dark); // Adds the dark tone if it exists
    if (medium) mediumShades.push(medium); // Adds the medium tone if it exists
    if (light) lightShades.push(light); // Adds the light tone if it exists
    if (fluor) fluorShades.push(fluor); // Adds the fluor tone if it exists
  });

  return [...darkShades, ...mediumShades, ...lightShades, ...fluorShades];
}

export function getColorToneAndIntensity(hexCode: string) {
  // Iterate over each color tone and its shades
  for (const color of COLOR_TONES_PALETTE) {
    const shadeIndex = color.shades.indexOf(hexCode.toUpperCase());

    // If hexCode is found, return the color tone and intensity based on index
    if (shadeIndex !== -1) {
      const intensity =
        shadeIndex === 0
          ? ColorIntensityType.LIGHT
          : shadeIndex === 1
          ? ColorIntensityType.MEDIUM
          : shadeIndex === 2
          ? ColorIntensityType.DARK
          : ColorIntensityType.FLUOR;

      return { tone: color.type, intensity };
    }
  }

  // Return null or throw an error if hexCode is not found
  return null;
}
