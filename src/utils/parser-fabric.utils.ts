import { FiberType } from '../enums';

export const parserStringFabric = (fabric: string) => {
  // Regular expression to match the structure part before the first percentage
  const structureMatch = fabric.match(/^[^\d%]+/);
  const structure = structureMatch ? structureMatch[0].trim() : '';

  // Convert matchAll result to an array
  const compositionMatches = Array.from(fabric.matchAll(/(\d+)%([A-Z]+)/g));

  // Map over the matches to create the composition array
  const composition = compositionMatches.map((match) => ({
    percentage: parseInt(match[1], 10),
    fiber: match[2] as FiberType,
  }));

  return {
    structure,
    composition,
  };
};
