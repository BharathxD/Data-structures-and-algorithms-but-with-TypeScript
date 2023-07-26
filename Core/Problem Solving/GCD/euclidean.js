const euclidean = (x, y) => (x ? euclidean(y % x, x) : y);

// x % y = r
// If r is the gcd of x and y
// then r is also a gcd of y % r
// and it goes on, until the remainder is 0

console.log(euclidean(105, 33));
