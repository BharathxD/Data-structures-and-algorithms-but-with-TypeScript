const calculateMinimumCost2 = (start: number, end: number, k: number, stones: number[]): number => {
    if (start === end) return 0;
    if (start > end) return Infinity;
    let result = Infinity;
    for (let i = 1; i <= k; i++) {
        result = Math.min(
            result,
            calculateMinimumCost2(start + i, end, k, stones) + Math.abs(stones[start] - stones[start + i]),
        );
    }
    return result;
}

const i = 0;
const n = 5;
const k = 3;
const stones = [10, 30, 40, 50, 20]
// This problem is a one based index, so we need to start from the index 1
console.log(calculateMinimumCost2(i, n, k, stones));