const calculateMinimumCost = (start: number, end: number, stones: number[]): number => {
    // If the start reaches the last stone, return 0
    if (start === end) return 0;
    // If the start is at second last index, we cannot access the start+2 index, so we need to skip that part
    if (start === end - 1) return Math.abs(stones[start] - stones[start + 1]) + calculateMinimumCost(start + 1, end, stones);
    // If the start is beyond end, return Infinity
    if (start > end) return Infinity;
    /**
     * This works on the following formula
     * f(start, end) = min(|stones[i] - stones[i+1]| + f(i+1, end), |stones[i] - stones[i+2]| + f(i+2, end))
     */
    return Math.min(
        Math.abs(stones[start] - stones[start + 1]) + calculateMinimumCost(start + 1, end, stones),
        Math.abs(stones[start] - stones[start + 2]) + calculateMinimumCost(start + 2, end, stones)
    );
}

const n = [0, 30, 10, 60, 10, 60, 50];
// This problem is a one based index, so we need to start from the index 1
console.log(calculateMinimumCost(1, n.length - 1, n));