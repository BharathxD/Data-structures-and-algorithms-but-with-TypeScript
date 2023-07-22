/**
 * @url https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/description/
 * @param {number[][]} moves
 * @return {string}
 */
function tictactoe(moves: number[][]): string {
    let turn: boolean = true; // If the turn is true it's "A"
    // Prepare a board with empty strings
    const board: string[][] = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    // Initialize `totalMoves` with 0
    let totalMoves = 0;
    // Continue the loop until all the moves are exhausted
    for (let i = 0; i < moves.length; i++) {
        // Obtain the row and col of the board
        const row = moves[i][0];
        const col = moves[i][1];
        // Check who's the current player
        const currentPlayer = turn ? "A" : "B";
        // Map the board with `X` or `0` based on the `currentPlayer`, only if it's empty
        board[row][col] = board[row][col] === " " ? playerMap[currentPlayer] : " ";
        // Now, let's increment the `totalMoves`
        totalMoves++;
        // Check if the board satisifies the win pattern, if it does return the currentPlayer
        if (isWinner(board, currentPlayer)) return currentPlayer;
        // As there are only `9` moves/mappings are possible, we need to continously check if the moves are under the limit. If the limit is exceeded, return `Draw`
        if (totalMoves === 9) return "Draw";
        // Change the turn
        turn = !turn;
        turn = !turn;
    }
    return "Pending";
};

/**
 * Created a map, for more readability
 */
const playerMap = {
    'A': 'X',
    'B': 'O'
}

/**
 * @param {string[][]} grid
 * @param {string} player 
 * @returns {boolean}
 */
function isWinner(grid: string[][], player: "A" | "B"): boolean {
    for (let i = 0; i < 3; i++) {
        // Check vertical row
        if (grid[0][i] === playerMap[player] && grid[1][i] === playerMap[player] && grid[2][i] === playerMap[player])
            return true;
        // Check horizontal row
        if (grid[i][0] === playerMap[player] && grid[i][1] === playerMap[player] && grid[i][2] === playerMap[player])
            return true;
    }
    // Check Diagonally
    if (grid[0][0] === playerMap[player] && grid[1][1] === playerMap[player] && grid[2][2] === playerMap[player])
        return true;
    if (grid[0][2] === playerMap[player] && grid[1][1] === playerMap[player] && grid[2][0] === playerMap[player]) return true;
    return false;
}

/**
 * Test Cases
 */
const moves = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]
tictactoe(moves);