// A function that returns a function or takes a function is known to be a Higher order function

/**
 * A `map` is a higher order function that takes fucntion as an argument (a callback function), and returns an `array` in which every value is populated
 */
const array = [1, 2, 3, 4, 5];
console.log(array.map((val) => val * val));

/**
 * Polyfill for map
 */
const customMap = (array, callback) => {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(callback(array[i], i));
  }
  return resultArray;
};

console.log(customMap(array, (val) => val * val));

/**
 * Filter: HOF
 * Filter should always return a boolean otherwise the output will coerced to a boolean
 */

console.log(array.filter((value, index, originalArray) => value % 2 === 0));

/**
 * Reduce: HOF
 */

console.log(array.reduce((accumulator, value) => accumulator + value, 10));
