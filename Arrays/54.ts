/**
* @param {number[][]} matrix
* @return {number[]}
*/
function spiralOrder(matrix: number[][]): number[] {
    // Prepare the result array
    let resultantMatrix: number[] = [];
    // Total number of rows
    const m = matrix.length;
    // Total number of columns
    const n = matrix[0].length;
    let start_col = 0;
    let last_col = n - 1;
    let start_row = 0;
    let last_row = m - 1;
    // Keep track of the number of elements added
    let count = 0;
    // Continue loop until the count is less than row * column
    while (count < m * n) {
        // Push the element in the every column of the first row to the result array and eliminate the first row
        for (let i = start_col; i <= last_col; i++) {
            resultantMatrix.push(matrix[start_row][i]);
            count++;
        }
        start_row++;
        // Check if the spiral is complete, and break the loop
        if (count === m * n) break;
        // Push the element in the last col of every row and eliminate the last column
        for (let i = start_row; i <= last_row; i++) {
            resultantMatrix.push(matrix[i][last_col]);
            count++;
        }
        last_col--;
        // Check if the spiral is complete, and break the loop
        if (count === m * n) break;
        // Push the element in every col of the last row to result array and eliminate last row
        for (let i = last_col; i >= start_col; i--) {
            resultantMatrix.push(matrix[last_row][i]);
            count++;
        }
        last_row--;
        // Check if the spiral is complete, and break the loop
        if (count === m * n) break;
        // Push the element in the every row of first column to result array and eliminate first column
        for (let i = last_row; i >= start_row; i--) {
            resultantMatrix.push(matrix[i][start_col]);
            count++;
        }
        start_col++;
        // Check if the spiral is complete, and break the loop
        if (count === m * n) break;
    }
    return resultantMatrix
};

/**
 * Test Cases
 */
const matrixOne = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Expected Output: [1,2,3,6,9,8,7,4,5]
const matrixTwo = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// Expected Output: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder(matrixTwo));
