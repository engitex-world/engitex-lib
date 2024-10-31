import { ColorToneType } from '../enums/color.enum';

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
  { type: ColorToneType.ORANGE, shades: ['#FFE0B2', '#FFB74D', '#E65100'] }, // Light, Medium, Dark Orange
  { type: ColorToneType.YELLOW, shades: ['#FFF9C4', '#FFF176', '#F57F17'] }, // Light, Medium, Dark Yellow
  { type: ColorToneType.GREEN, shades: ['#C8E6C9', '#81C784', '#1B5E20'] }, // Light, Medium, Dark Green
  { type: ColorToneType.BLUE, shades: ['#BBDEFB', '#64B5F6', '#0D47A1'] }, // Light, Medium, Dark Blue
  { type: ColorToneType.PURPLE, shades: ['#E1BEE7', '#BA68C8', '#4A148C'] }, // Light, Medium, Dark Purple
  { type: ColorToneType.PINK, shades: ['#F8BBD0', '#F06292', '#880E4F'] }, // Light, Medium, Dark Pink
  { type: ColorToneType.BROWN, shades: ['#D7CCC8', '#A1887F', '#3E2723'] }, // Light, Medium, Dark Brown
  { type: ColorToneType.GRAY, shades: ['#F5F5F5', '#BDBDBD', '#212121'] }, // Light, Medium, Dark Gray
  { type: ColorToneType.BLACK, shades: ['#E0E0E0', '#757575', '#000000'] }, // Light, Medium, Dark Black (Black at the darkest)
  { type: ColorToneType.WHITE, shades: ['#FFFFFF', '#FAFAFA', '#F5F5F5'] }, // Light, Medium, Dark White (Lightest tones possible)
];

export function getTonesPalette() {
  return COLOR_TONES_PALETTE.flatMap((color) => color.shades);
}
