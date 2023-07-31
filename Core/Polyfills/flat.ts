const nestedArray = [1, 2, [3, 4, [5, 6, 7]], 5, [6]];

const flatten = (arr: any[]): number[] => arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(flatten(curr)) : acc.concat(curr), []);

console.log(`Flat polyfill: ${flatten(nestedArray)}`);
console.log(`The inbuilt prototype: ${nestedArray.flat()}`);