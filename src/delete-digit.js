const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr1 = String(n).split(''),
    min = Math.min(...arr1).toString(),
    arr2 = arr1.slice();
  arr2.splice(arr1.indexOf(min), 1);
  arr1.splice(0, 1);

  return arr2.join('') > arr1.join('')
    ? Number(arr2.join(''))
    : Number(arr1.join(''));
}

module.exports = {
  deleteDigit,
};
