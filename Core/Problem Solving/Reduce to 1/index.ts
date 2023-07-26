const reduce = (n: number): number => {
    if (n === 1) return 0;
    if (n < 1) return Infinity
    return 1 + Math.min(Math.floor(reduce(n / 2)), Math.floor(reduce(n / 3)), Math.floor(--n));
}
/**
 * Test Cases
 */
const n = 6;
const result = reduce(n);
console.log(result);