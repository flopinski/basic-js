const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n = 1,
    res = '';
  i = 0;
  while (i < str.length) {
    if (str[i] === str[i + 1]) n++;
    else {
      res += n + str[i];
      n = 1;
      console.log(res);
    }
    i++;
  }
  return res.replace(/1/gi, '');
}

module.exports = {
  encodeLine,
};
