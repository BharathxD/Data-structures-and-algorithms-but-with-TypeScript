// We need to return the result in the form of an array, so we can globally declare a variable named `arr`
let arr: number[] = [];

/**
 * @param {number} i
 * @param {number} n
 * @return {number[] | undefined}
 */
function f(i: number, n: number): number[] | undefined {
    // Don't do anything if the i > n
    if (i > n) return;
    // Only if `i` is not zero, we need to push the `i` to the array
    if (i !== 0) arr.push(i);
    // If `i` is zero we need to start the loop from 1, or else we can start the loop from 0
    for (let j = !i ? 1 : 0; j <= 9; j++) {
        f(10 * i + j, n);
    }
}

/**
 * @url https://leetcode.com/problems/lexicographical-numbers/description/
 * @param {number} n
 * @return {number[]}
 */
function lexicalOrder(n: number): number[] {
    // Initialize the `arr` with `[]`
    arr = [];
    // The following function will recursively push array with numbers in lexicographical order, within the given range (i.e: n)
    f(0, n);
    return arr;
}

/**
 * Test Cases
 */
const n = 14;
const result = lexicalOrder(n);
console.log(result)