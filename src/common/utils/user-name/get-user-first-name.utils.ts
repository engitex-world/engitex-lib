export function getUserFirstName(fullName: string): string {
  if (!fullName) {
    return '';
  }

  const nameParts = fullName.trim().split(' ');
  const firstName = nameParts[0];
  const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  return capitalizedFirstName;
}
