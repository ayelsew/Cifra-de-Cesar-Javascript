c = {
    /* Controllers */
    'Reset': "\x1b[0m",
    'Bright': "\x1b[1m",
    'Dim': "\x1b[2m",
    'Underscore': "\x1b[4m",
    'Blink': "\x1b[5m",
    'Reverse': "\x1b[7m",
    'Hidden': "\x1b[8m",
    /* Foreground */
    'FgBlack': "\x1b[30m",
    'FgRed': "\x1b[31m",
    'FgGreen': "\x1b[32m",
    'FgYellow': "\x1b[33m",
    'FgBlue': "\x1b[34m",
    'FgMagenta': "\x1b[35m",
    'FgCyan': "\x1b[36m",
    'FgWhite': "\x1b[37m",
    /* Backgound */
    'BgBlack': "\x1b[40m",
    'BgRed': "\x1b[41m",
    'BgGreen': "\x1b[42m",
    'BgYellow': "\x1b[43m",
    'BgBlue': "\x1b[44m",
    'BgMagenta': "\x1b[45m",
    'BgCyan': "\x1b[46m",
    'BgWhite': "\x1b[47m",
}

/**
 * @description Out a custom text in console.
 * @version 1.0
 * @param {String} color [opcional]
 * @param {String} ctl [opcional]
 * @param {String} text obrigatorio
 * @example print("Hello World",'FgRed','Bright');
 * @returns {void}
 * @exports
 */
exports.print = (text, color = 'FgWhite', ctl = 'Blink') => {
    if (typeof text) {
        console.log(c[color], c[ctl], text, c.Reset);
    } else {
        throw "text must be string";
    }
}