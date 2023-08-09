/**
 * The following function takes O(logn) time to finish it's execution
 */
const func1 = (n: number) => {
    let sum = 0;
    for (let i = 0; i < n; i *= 2) {
        sum += i;
    }
    return sum;
}