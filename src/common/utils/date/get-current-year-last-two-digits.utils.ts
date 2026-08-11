export function getCurrentYearTwoDigits(): string {
  const currentYear = new Date().getFullYear();
  return currentYear.toString().slice(-2);
}
