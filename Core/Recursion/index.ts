const factorial = (n: number): number => n === 1 ? n : n * factorial(n - 1);

/**
 * Test Cases
 */
const n = 5;
console.log(factorial(n));