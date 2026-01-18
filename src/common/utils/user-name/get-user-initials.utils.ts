export function getUserInitials(fullName: string): string {
  const trimmedName = fullName.trim();
  const nameParts = trimmedName.split(' ');

  if (nameParts.length >= 2) {
    const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
    const lastNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  } else {
    const initials = trimmedName.slice(0, 2).toUpperCase();
    return initials;
  }
}
