const consecutiveOnes = (n: number): number => {
    if (n === 0) return 2;
    if (n === 1) return 3;
    return consecutiveOnes(n - 1) + consecutiveOnes(n - 2);
}


const n = 0;
console.log(consecutiveOnes(n))