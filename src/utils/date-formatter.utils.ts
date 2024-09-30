export function formatDate(dateString: string, includeHourMin = false): string {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${day}-${month}-${year}`;

  return includeHourMin ? `${formattedDate} ${hours}:${minutes}` : formattedDate;
}
