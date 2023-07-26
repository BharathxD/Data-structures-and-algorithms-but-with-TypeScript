function gcd(x, y, i = 2) {
  let potentialAnswer = 1;
  for (let i = 2; i < Math.min(x, y); i++) {
    if (x % i === 0 && y % i === 0) {
      potentialAnswer = i;
    }
  }
  return potentialAnswer;
}

console.log(gcd(24, 28));
