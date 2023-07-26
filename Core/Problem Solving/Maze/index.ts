const maze = (n: number, m: number, i = 0, j = 0): number => {
    if (i >= n || j >= m) return 0;
    if (i === n - 1 || j === m - 1) return 1;
    return maze(n, m, i + 1, j) + maze(n, m, i, j + 1);
}

/**
 * Test Cases
 */
const m: number = 2;
const n: number = 2;
const result: number = maze(m, n);
console.log(result);