/**
 * @param {string} value 
 * @returns {number}
 */
export function convertToNumber(value) {
  const nb = parseInt(value, 10);

  if (isNaN(nb)) {
    throw new Error(`Erreur : "${value}" n'est pas un nombre`);
  }

  return nb;
}
