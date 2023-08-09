/**
 * The following function takes O(logn) time to finish it's execution
 */
const func3 = (n: number) => {
    let sum = 0;
    while (n > 0) {
        sum += 1;
        n /= 2;
    }
    return sum;
}