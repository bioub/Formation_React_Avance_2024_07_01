/**
 * @callback callback
 * @param {string} val
 */

/**
 * @param {string} val 
 * @param {callback} cb 
 */
export function timeoutUpper(val, cb) {
  setTimeout(() => {
    cb(val.toUpperCase());
  }, 1000);
}


