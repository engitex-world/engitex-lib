export function formatDate(dateString: string, includeHourMin = false): string {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;

  return includeHourMin ? `${formattedDate} ${hours}:${minutes}` : formattedDate;
}

export function getWeekNumber(date: Date): number {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const dayOfYear =
    Math.floor((date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000)) + 1;

  // ISO week day (Monday = 1, Sunday = 7)
  const isoWeekDay = date.getDay() === 0 ? 7 : date.getDay();

  // Find the Thursday of the current week
  const thursdayOfCurrentWeek = new Date(date);
  thursdayOfCurrentWeek.setDate(date.getDate() + (4 - isoWeekDay));

  const firstThursdayOfYear = new Date(thursdayOfCurrentWeek.getFullYear(), 0, 4);

  // Calculate the difference in weeks
  const weekNumber = Math.floor(
    (thursdayOfCurrentWeek.getTime() - firstThursdayOfYear.getTime()) / (7 * 24 * 60 * 60 * 1000) +
      1
  );

  return weekNumber;
}
