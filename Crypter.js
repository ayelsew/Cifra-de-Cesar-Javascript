const Print = require('./modulos/Output.js').print;
const Argv = process.argv.slice(2);
const Alphabet = require('./modulos/Alphabet').letters();
const AlphabetCipher = require('./modulos/Rotor').rotate(parseInt(Argv[0]));
const text = Argv[1].toLowerCase();
let cipherText = '';

function crypt() {
    for (let letter of text) {
        let needle = Alphabet.indexOf(letter);
        cipherText += (AlphabetCipher[needle]) ? AlphabetCipher[needle] : letter;
    }
    return cipherText;
}

Print('*** CAESAR CIPHER ***\n', 'FgBlue', 'Bright');
Print("Encrypting...", 'FgGreen');
Print(`${Argv[0]} ROT(s).\n`, 'FgRed');
Print(`Input: `, 'FgYellow');
Print(text);
Print(`Output: `, 'FgYellow');
Print(crypt());