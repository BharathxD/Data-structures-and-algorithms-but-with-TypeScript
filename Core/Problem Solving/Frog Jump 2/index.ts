/**
 * Calculates the minimum cost to reach the end from the start index
 * by making at most 'k' jumps while considering the cost of jumping
 * between stones in an array.
 *
 * @param {number} start - The starting index.
 * @param {number} end - The ending index.
 * @param {number} k - The maximum number of jumps allowed.
 * @param {number[]} stones - An array of stone positions.
 * @param {number[][]} memo - A memoization table to store computed results.
 * @returns {number} The minimum cost to reach the end.
 */
const calculateMinimumCost = (
    start: number,
    end: number,
    k: number,
    stones: number[],
    memo: number[][]
): number => {
    // Base cases:
    if (start === end) return 0; // We are already at the end.
    if (start > end) return Infinity; // Cannot reach the end.
    if (memo[start][k] !== undefined) return memo[start][k]; // Return memoized result if available.

    let result = Infinity;

    // Try making 'k' jumps from the current position.
    for (let i = 1; i <= k; i++) {
        const nextStoneIndex = start + i;

        // Ensure we don't go beyond the 'end' index.
        if (nextStoneIndex <= end) {
            const cost = calculateMinimumCost(
                nextStoneIndex,
                end,
                k,
                stones,
                memo
            ) + Math.abs(stones[start] - stones[nextStoneIndex]);

            // Update the result with the minimum cost among all possible jumps.
            result = Math.min(result, cost);
        }
    }

    // Memoize the result for this position and remaining jumps.
    memo[start][k] = result;
    return result;
};

const i = 0; // Starting index
const n = 5; // Ending index (adjusted to be zero-based)
const k = 3; // Maximum number of jumps allowed
const stones = [10, 30, 40, 50, 20]; // Array of stone positions
// Initialize a memoization table with dimensions [n][k+1].
const memo: number[][] = new Array(n).fill(null).map(() => new Array(k + 1));
console.log(calculateMinimumCost(i, n - 1, k, stones, memo)); // Calculate and log the minimum cost.
