const output = [1, 2, 3, 4].map((val, i) => val + 1);

/**
 * Polyfill for the Map
 * @param {Function} cb
 * @returns the processed array
 */
Array.prototype.customMap = (cb) => {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const currentValue = cb(this[i], i);
    if (currentValue) result.push(currentValue);
  }
  return result;
};
