import { getYearDigits } from './calendar-dates.utils';

import { Color } from '@/entities';
import { ColorIntensityCode, ColorToneCode } from '@engitex-lib/enums';

export function generateColorCode(color: Color, acronym: string) {
  const { id, tone, intensity } = color;
  const toneCode = ColorToneCode[tone].pt;
  const intensityCode = ColorIntensityCode[intensity].pt;

  const code = `${acronym}.${toneCode}.${intensityCode}.${getYearDigits()}.${id}`;
  return code;
}
