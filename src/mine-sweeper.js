const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let minesCounter = [];

  for (let i = 0; i < matrix.length; i++) {
    minesCounter.push([]);
    
    for (let j = 0; j < matrix[i].length; j++) {
      minesCounter[i][j] = 0;

      // up
      if (matrix[i][j - 1]) minesCounter[i][j]++;

      // down
      if (matrix[i][j + 1] !== undefined) {
        if (matrix[i][j + 1]) minesCounter[i][j]++;
      }

      // left
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j]) minesCounter[i][j]++;
      }

      // right
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j]) minesCounter[i][j]++;
      }

      //down right

      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j + 1]) minesCounter[i][j]++;
      }

      //down left

      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j - 1]) minesCounter[i][j]++;
      }

      // top right

      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j + 1]) minesCounter[i][j]++;
      }

      // top left

      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j - 1]) minesCounter[i][j]++;
      }
    }
  }
  
  return minesCounter
}

module.exports = {
  minesweeper,
};
