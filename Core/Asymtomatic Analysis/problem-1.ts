/**
 * The following function takes O(n) to execute
 */
const func0 = (n: number) => {
    let result: number = 0;
    for (let i = 0; i < n; i /= 2) {
        for (let j = 0; j < i; j++) {
            // This undergoes Geometric Progression
            result += i * j;
        }
    }
    return result;
}