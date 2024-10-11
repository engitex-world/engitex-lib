export function formatPhoneNumber(phoneNumber: string): string {
  // Extract the last 9 digits (which will be grouped in 3s)
  const localNumber = phoneNumber.slice(-9);
  const countryCode = phoneNumber.slice(0, phoneNumber.length - 9);

  // Group the last 9 digits into 3 groups (e.g., "910 123 123")
  const groupedLocalNumber = localNumber.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');

  // Return the formatted phone number with a space between the country code and the grouped local number
  return `${countryCode} ${groupedLocalNumber}`;
}
