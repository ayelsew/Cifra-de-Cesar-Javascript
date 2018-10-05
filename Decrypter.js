const Print = require('./modulos/Output').print;
const Argv = process.argv.slice(2);
const Alphabet = require('./modulos/Alphabet').letters();
const AlphabetCipher = require('./modulos/Rotor').rotate(parseInt(Argv[0]));
const cipherText = Argv[1].toLowerCase();
let text = '';

function decrypt() {
    for (let letter of cipherText) {
        let needle = AlphabetCipher.indexOf(letter);
        text += (Alphabet[needle]) ? Alphabet[needle] : letter;
    }
    return text;
}

Print('*** CAESAR CIPHER ***\n', 'FgBlue', 'Bright');
Print("Decrypting...", 'FgGreen');
Print(`${Argv[0]} ROT(s).\n`, 'FgRed');
Print(`Input: `, 'FgYellow');
Print(cipherText);
Print(`Output: `, 'FgYellow');
Print(decrypt());