/**
 * @url https://leetcode.com/problems/reshape-the-matrix/description/
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    // If the rows and colums are not enough to reshape matrix, we will simply return the existing matrix
    if (mat.length * mat[0].length != (r) * (c)) return mat;
    // Initialize the result array that we are going to return, in a `r x c` matrix
    let resultArr = Array<number[]>(r);
    for (let i = 0; i < r; i++) {
        resultArr[i] = Array(c).fill(0);
    }
    // Specify the `row` and `col` to pass in the values from `mat` array to `resultArr`
    let row = 0;
    let col = 0;
    // Iterate over each element present in the original matrix `mat`
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            // Place the element in the `resultArr` based on `row` and `col`
            resultArr[row][col] = mat[i][j];
            // Increment the `col` count
            col++;
            // Change the `row` and reset the `col` to 0, only if `col` reaches the end of the nested array (or in other words if the `col` === `c`)
            if (col === c) {
                col = 0;
                row++;
            }
        }
    }
    return resultArr;
};

/**
 * Test Cases
 */
const matrix = [[1, 2], [3, 4]];
const r = 4;
const c = 1;

console.log(matrixReshape(matrix, r, c));
