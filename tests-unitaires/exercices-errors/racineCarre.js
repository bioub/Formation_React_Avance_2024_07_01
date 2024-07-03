/**
 * @param {number} nb 
 * @returns {number}
 */
export function racineCarre(nb) {
  if (nb < 0) {
    throw new Error('nb must be positive');
  }

  return Math.sqrt(nb);
}
