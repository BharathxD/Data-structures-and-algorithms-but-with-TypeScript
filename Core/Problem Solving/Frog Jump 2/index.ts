const calculateMinimumCost = (
    start: number,
    end: number,
    k: number,
    stones: number[],
    memo: number[][]
): number => {
    if (start === end) return 0;
    if (start > end) return Infinity;
    if (memo[start][k] !== undefined) return memo[start][k];

    let result = Infinity;
    for (let i = 1; i <= k; i++) {
        const nextStoneIndex = start + i;
        if (nextStoneIndex <= end) {
            const cost = calculateMinimumCost(
                nextStoneIndex,
                end,
                k,
                stones,
                memo
            ) + Math.abs(stones[start] - stones[nextStoneIndex]);
            result = Math.min(result, cost);
        }
    }

    memo[start][k] = result;
    return result;
};

const i = 0;
const n = 5;
const k = 3;
const stones = [10, 30, 40, 50, 20];
// This problem is a one-based index, so we need to start from index 1
const memo: number[][] = new Array(n).fill(null).map(() => new Array(k + 1));
console.log(calculateMinimumCost(i, n - 1, k, stones, memo));
