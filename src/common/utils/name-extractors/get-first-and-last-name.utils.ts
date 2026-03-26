export function getFirstAndLastName(fullName: string): string {
  const trimmedName = fullName.trim();
  const nameParts = trimmedName.split(' ');

  if (nameParts.length >= 2) {
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
  } else {
    return nameParts[0];
  }
}
