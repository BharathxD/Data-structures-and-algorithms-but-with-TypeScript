const sum = (n, result = 0) =>
  n ? sum(Math.floor(n / 10), (result += n % 10)) : result;

// Add the last digit to sum and then remove the last digit from n and call the sum again, until the n becomes zero (It might be confusing, because i've used shorthand syntax)

console.log(sum(12345));
