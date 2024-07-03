/**
 * @param {number[]} nbs 
 * @returns {number}
 */
export function totalPairs(nbs) {
  return nbs.filter((nb) => nb % 2 === 0).length;
}
