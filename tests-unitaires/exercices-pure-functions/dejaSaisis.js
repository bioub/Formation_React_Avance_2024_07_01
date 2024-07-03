/**
 * @param {number[]} nbs
 * @returns {string}
 */
export function dejaSaisis(nbs) {
  if (!nbs.length) {
    return;
  }

  return 'Vous avez déjà saisi : ' + nbs.join(' | ');
}
