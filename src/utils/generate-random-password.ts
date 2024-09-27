// Helper function to generate a random numeric password
export function generateRandomPassword(length = 6): string {
  let result = '';
  const characters = '0123456789'; // Only numeric characters
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}
