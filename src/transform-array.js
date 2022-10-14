const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (arr instanceof Array) {
    const firstArr = arr.slice();
    let resArr = firstArr;
    let result = resArr.map((element, index) => {
      let i = 0;
      if (element === '--double-next') {
        i = index;
        typeof resArr[i + 1] === 'number' ||
        resArr[i] !== resArr[resArr.length - 1]
        ? resArr.splice(i, 1, resArr[i + 1], 'deleted')
        : resArr.splice(i, 1, 'deleted');
      } else if (element === '--double-prev') {
        i = index;
        typeof resArr[i - 1] === 'number' || resArr[i] !== resArr[0]
        ? resArr.splice(i, 1, resArr[i - 1], 'deleted')
        : resArr.splice(i, 1),
        'deleted';
      } else if (element === '--discard-prev') {
        i = index;
        typeof resArr[i - 1] === 'number' || resArr[i] !== resArr[0]
        ? resArr.splice(i - 1, 2, 'deleted')
        : resArr.splice(i, 1, 'deleted');
      } else if (element === '--discard-next') {
        i = index;
        typeof resArr[i + 1] === 'number' ||
        resArr[i] !== resArr[resArr.length - 1]
        ? resArr.splice(i, 2, 'deleted')
        : resArr.splice(i, 1, 'deleted');
      }
    });
    result = resArr.filter((element) => element !== 'deleted');
    arr = firstArr;
    return result;
  }
  else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
} 


module.exports = {
  transform,
};
