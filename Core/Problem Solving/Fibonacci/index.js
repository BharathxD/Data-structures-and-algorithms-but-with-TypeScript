const fibonacciRecursive = (n) =>
  n <= 1 ? n : fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

const printSeriesRecursive = (n, current = 0) => {
  if (current > n) return;
  console.log(fibonacciRecursive(current));
  printSeriesRecursive(n, current + 1);
};

printSeriesRecursive(5);
