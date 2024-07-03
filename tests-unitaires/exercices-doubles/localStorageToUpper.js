/**
 * @param {string} key 
 * @returns {string}
 */
export function localStorageToUpper(key) {
  return localStorage.getItem(key).toUpperCase();
}
