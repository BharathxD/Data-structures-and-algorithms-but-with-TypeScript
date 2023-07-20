/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var transpose = (matrix) => {
  let result = Array(matrix[0].length).fill(Array(matrix.length));
  for (let i = 0; i < matrix[0].length; i++) {
    let arr = Array(matrix.length);
    result[i] = arr;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
};

/**
 * Test Case
 */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
transpose(matrix);
