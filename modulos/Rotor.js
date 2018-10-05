const Alphabet = require('./Alphabet').letters();

/**
 * @description Rotate the positions in array of Alphabet
 * @param {Number} hop (Default = 0)
 * @version 0.1
 * @exports
 * @returns {Array}
 * @example .rotate(4) //move the letter to 4 positions on left
 */
exports.rotate = (hop = 0) => {
    if (typeof hop === 'number' && hop % 1 === 0) {
        const pushed = Alphabet.slice(0, hop);
        Alphabet.splice(0, hop);
        Alphabet.sort();
        return Alphabet.concat(pushed);
    } else {
        throw "The value of hop must be a number and integer! ()";
    }
}