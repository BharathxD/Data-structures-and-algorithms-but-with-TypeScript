const nestedArray = [1, 2, [3, 4, [5, 6, 7]], 5, [6]];

/**
 * Flattens a nested array to a one-dimensional array.
 *
 * This function recursively flattens a nested array structure, returning
 * a one-dimensional array containing all the elements from the input array.
 *
 * @param arr - The array to be flattened.
 * @returns A one-dimensional array containing all the elements from the input array.
 */
const flatten = (arr: any[]): number[] => arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(flatten(curr)) : acc.concat(curr), []);

console.log(`Flat polyfill: ${flatten(nestedArray)}`);
console.log(`The inbuilt prototype: ${nestedArray.flat()}`);