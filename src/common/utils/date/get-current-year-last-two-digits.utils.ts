/**
 * Returns the last two digits of the current year (e.g., "24" for 2024).
 */
export function getCurrentYearTwoDigits(): string {
  const currentYear = new Date().getFullYear();
  return currentYear.toString().slice(-2);
}
