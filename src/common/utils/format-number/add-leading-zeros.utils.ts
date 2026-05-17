export function addLeadingZeros(number: number, desiredSize: number): string {
  let num = number.toString();

  while (num.length < desiredSize) {
    num = '0' + num;
  }

  return num;
}
