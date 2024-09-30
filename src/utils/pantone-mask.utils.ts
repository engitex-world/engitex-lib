export const handlePantoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.toUpperCase(); // Convert to uppercase
  // Remove all non-alphanumeric characters except numbers and letters
  value = value.replace(/[^A-Z0-9]/gi, '');

  // Enforce the two digits, hyphen, four digits, space, and three letters format
  if (value.length <= 2) {
    // If there are only 2 digits or less, leave it as is
    e.target.value = value;
  } else if (value.length <= 6) {
    // Insert the hyphen after the first two digits
    e.target.value = `${value.slice(0, 2)}-${value.slice(2)}`;
  } else if (value.length <= 10) {
    // Ensure there are two digits, a hyphen, and four digits
    e.target.value = `${value.slice(0, 2)}-${value.slice(2, 6)} ${value.slice(6)}`;
  } else {
    // Format complete: two digits, hyphen, four digits, space, and 3 letters
    e.target.value = `${value.slice(0, 2)}-${value.slice(2, 6)} ${value.slice(6, 9)}`;
  }
};
