const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  
  if (!Array.isArray(members)) return false;
  const realMembers = members.filter((member) => typeof member === "string");
  if (Array.isArray(realMembers) && realMembers.length >= 1) {
    const result = realMembers
      .map((element) => {
        return element.trim().toUpperCase().slice(0, 1);
      })
      .sort()
      .join("");

    return result;
  } else return false;
}

module.exports = {
  createDreamTeam,
};
