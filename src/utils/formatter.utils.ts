export function formatIdDigits(id: number, numDigits: number): string {
  // Convert the number to a string
  let idStr = id.toString();

  // Add leading zeros until the string has a length of 5
  while (idStr.length < numDigits) {
    idStr = '0' + idStr;
  }

  return idStr;
}

export function removeNonSignificantZeros(value: string | number | null | undefined) {
  return value == null ? value : parseFloat(value.toString());
}
