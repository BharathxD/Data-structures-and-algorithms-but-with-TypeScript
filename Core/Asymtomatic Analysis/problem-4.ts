/**
 * The following function takes O() time to finish it's execution
 */
const func4 = (n: number) => {
    let sum: number = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j = i + j) {
            sum += i + j;
        }
    }
    return sum;
}