/**
 * Transposes a matrix (2D array).
 *
 * @param {number[][]} matrix - The input matrix to be transposed.
 * @return {number[][]} - The transposed matrix.
 */
var transpose = (matrix) => {
  // Create a new matrix with swapped dimensions
  let result = Array(matrix[0].length);

  for (let i = 0; i < matrix[0].length; i++) {
    let arr = Array(matrix.length);
    result[i] = arr;
  }

  // Copy elements from the original matrix to the transposed matrix
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
