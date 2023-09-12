/**
 * Counts the frequency of each unique character in a string.
 * @param {string} value - The input string.
 * @returns {Object} An object where keys are unique characters, and values are their frequencies.
 */
const frequency = (value) => {
  let obj = {};
  for (let val of value) {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }
  }
  return obj;
};

/**
 * Returns an array of unique values from an input array.
 * @param {Array} arrayOfDuplicateValues - The input array with possible duplicate values.
 * @returns {Array} An array containing unique values from the input array.
 */
const uniqueKeys = (arrayOfDuplicateValues) => {
  const nonDuplicateValues = {};
  for (const property of arrayOfDuplicateValues) {
    if (!nonDuplicateValues[property]) {
      nonDuplicateValues[property] = true;
    }
  }
  return Object.keys(nonDuplicateValues);
};

console.log(uniqueKeys(["a", "b", "c", "d", "b", "c", "g", "e"]));
console.log(frequency("javascript"));
