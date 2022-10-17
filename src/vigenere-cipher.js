const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    let messageArray = message.toUpperCase().split('');
    let keyArray = key.toUpperCase().split('');

    let k = 0;
    let numsForKey = keyArray.map((el) => el.charCodeAt(0) - 65);
    let result = [];

    for (let i = 0; i < messageArray.length; i++) {
      let position = messageArray[i].charCodeAt(0);

      if (position >= 65 && position < 91) {
        result.push(
          String.fromCharCode(
            ((numsForKey[k % numsForKey.length] + position - 65) % 26) + 65
          )
        );
        k++;
      } else result.push(messageArray[i]);
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!(message && key)) throw new Error('Incorrect arguments!');

    let messageArray = message.toUpperCase().split('');
    let keyArray = key.toUpperCase().split('');

    let k = 0;
    let numsForKey = keyArray.map((el) => el.charCodeAt(0) - 65);
    let result = [];

    for (let i = 0; i < messageArray.length; i++) {
      let position = messageArray[i].charCodeAt(0);

      if (position >= 65 && position < 91) {
        result.push(
          String.fromCharCode(
            65 + ((position - 65 - numsForKey[k % numsForKey.length] + 26) % 26)
          )
        );

        k++;
      } else result.push(messageArray[i]);
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
