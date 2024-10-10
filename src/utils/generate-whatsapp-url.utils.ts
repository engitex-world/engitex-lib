export function generateWhatsAppUrl(phoneNumber: string): string {
  // Remove the '+' sign if it exists
  const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber.slice(1) : phoneNumber;
  // Return the WhatsApp URL
  return `https://wa.me/${formattedNumber}`;
}
