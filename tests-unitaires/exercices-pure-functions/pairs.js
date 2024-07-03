/**
 * @param {number[]} nbs
 * @returns {number[]}
 */
export function pairs(nbs) {
  return nbs.filter((nb) => nb % 2 === 0);
}
