const natural = (n: number, count = 1): void => {
    if (count === n) return console.log(n);
    console.log(count);
    return natural(n, ++count);
}

const n = 6;
natural(n);