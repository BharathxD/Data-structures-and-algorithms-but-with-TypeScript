const print = (grid, m, n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i % 2 === 0) str += grid[j][i] + " ";
      else {
        str += grid[n - j - 1][i] + " ";
      }
    }
    str += "\n";
  }
  return str;
};

let grid = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

console.log(print(grid, 4, 4));
