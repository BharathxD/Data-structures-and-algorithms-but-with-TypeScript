const min = (coin: number[], sum: number): number => {
    if (sum <= 0) return 0;
    let result = Infinity;
    for (let i = 0; i < coin.length; i++) {
        if (sum >= coin[i]) result = Math.min(result, min(coin, sum - coin[i]))
    }
    return ++result;
}

const n = [1, 5, 7];
const sum = 11
const result = min(n, sum);
console.log(result)