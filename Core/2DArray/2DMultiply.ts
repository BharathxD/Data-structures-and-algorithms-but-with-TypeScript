let gridOne = [
    [1, 1],
    [2, 2],
    [3, 3]
];
let gridTwo = [
    [1, 1, 1],
    [2, 2, 2]
];

// 0 1 + 1 0

const multiplyTwoMatrices = (gridOne: number[][], gridTwo: number[][]) => {
    /**
     * Let's just suppose that we have, `mxn` & `oxp` rows and columns for gridOne and gridTwo respectively
     * In-order for use to generate a new matrix with the mupltiplication of the given two matrices, we need to create the new matrix with `mxp` rows and columns
     */
    let resultMatrix = Array(gridOne.length);
    for (let i = 0; i < gridOne.length; i++) {
        resultMatrix[i] = Array(gridTwo[0].length).fill(0);
    }
    // Iterate over every row of `resultMatrix`
    for (let i = 0; i < resultMatrix.length; i++) {
        // Iterate over every col of `resultMatrix[i]`
        for (let j = 0; j < resultMatrix[0].length; j++) {
            // `ith` column of `gridOne` elements and `jth` row of `gridTwo` elements
            for (let x = 0; x < gridTwo.length; x++) {
                // Sum of multiplication of `gridOne[i][x]th` element and `gridTwo[x][j]th` element
                resultMatrix[i][j] += gridOne[i][x] * gridTwo[x][j]
            }
        }
    }
    return resultMatrix;
}

multiplyTwoMatrices(gridOne, gridTwo);