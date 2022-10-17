const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailArr = email.split('');
  const result = emailArr.slice(email.lastIndexOf('@') + 1).join('');
  return result;
}

module.exports = {
  getEmailDomain,
};
