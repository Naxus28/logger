const clc = require('cli-color');
var PrettyError = require('pretty-error');
var pe = new PrettyError();

const logTypes = {
	error: clc.red,
	warn: clc.yellow,
	notice: clc.blue,
	success: clc.green
};

const exceptions = {
	argumentException: {
		exceptionType: 'Argument Exception',
		message: 'The "log" function accepts either of these four strings as a second optional argument: "success", "error", "warn", or "notice". Any other value will throw an error'
	}
};

// pretty error custom styles
pe.appendStyle({
   // this is a simple selector to the element that says 'Error'
   'pretty-error > header > title > kind': { background: 'none', color: 'red' },
   // the 'colon' after 'Error':
   'pretty-error > header > colon': { display: 'none' },
   // the error message
   'pretty-error > header > message': {
      color: 'red',
      /* colors supported: black, red, green, yellow, blue, magenta, cyan, white,
      * grey, bright-red, bright-green, bright-yellow, bright-blue,
      * bright-magenta, bright-cyan, and bright-white
      */
      background: 'none',
      padding: '0 1' // top/bottom left/right
   },
   'pretty-error > trace > item': {
      marginLeft: 2,
      bullet: '"<grey>o</grey>"'
      /* Notes on bullets:
       * The string inside the quotation mark gets used as the character
       * to show for the bullet point.
       * You can set its color/background color using tags.
       * This example sets the background color to white, and the text color
       * to cyan, the character will be a hyphen with a space character
       * on each side:
       * example: '"<bg-white><cyan> - </cyan></bg-white>"'
       * Note that we should use a margin of 3, since the bullet will be
       * 3 characters long.
       */
   },
   'pretty-error > trace > item > header > pointer > file': { color: 'bright-cyan'},
   'pretty-error > trace > item > header > pointer > colon': { color: 'cyan' },
   'pretty-error > trace > item > header > pointer > line': { color: 'bright-cyan' },
   'pretty-error > trace > item > header > what': { color: 'bright-white' },
   'pretty-error > trace > item > footer > addr': { display: 'none' }
});

module.exports = {
	logTypes,
	exceptions,
	pe
};


