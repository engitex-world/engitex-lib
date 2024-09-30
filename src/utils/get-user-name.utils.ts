export function getInitials(fullName: string): string {
  // Trim the input string to remove any leading or trailing whitespace
  const trimmedName = fullName.trim();

  // Split the name into parts by spaces
  const nameParts = trimmedName.split(' ');

  // Check if there are at least two parts (a first name and a last name)
  if (nameParts.length >= 2) {
    // Get the first letter of the first name and the last name
    const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
    const lastNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();

    // Return the initials
    return firstNameInitial + lastNameInitial;
  } else {
    // If there are fewer than two parts, take the first two characters of the trimmed name
    const initials = trimmedName.slice(0, 2).toUpperCase();
    return initials;
  }
}

export function getFirstName(fullName: string) {
  if (!fullName) return ''; // Handle empty or undefined input

  // Split the full name into parts
  const nameParts = fullName.trim().split(' ');

  // Take the first part as the first name
  const firstName = nameParts[0];

  // Capitalize the first letter and make the rest lowercase
  const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  return capitalizedFirstName;
}

export function getFirstAndLastName(fullName: string): string {
  // Trim the input string to remove any leading or trailing whitespace
  const trimmedName = fullName.trim();

  // Split the name into parts by spaces
  const nameParts = trimmedName.split(' ');

  // Check if there are at least two parts
  if (nameParts.length >= 2) {
    // Return the first and last name parts
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
  } else {
    // If there is only one part, return it as is
    return nameParts[0];
  }
}
