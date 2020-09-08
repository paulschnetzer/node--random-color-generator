const command = process.argv;
const chalk = require('chalk');
const randomColor = require('randomcolor');
// importiet alle notwendigen libaries und den userInput bzw. command

const y = randomColor({
  hue: command[2],
  luminosity: command[3],
});

//

const randomColors = randomColor();
if (command[2] === undefined) {
  console.log(
    chalk.hex(randomColors)(
      '############################ \n############################\n######     ' +
        randomColors +
        '    ######\n############################ \n############################',
    ),
  );
} else {
  console.log(
    chalk.hex(y)(
      '############################ \n############################\n######     ' +
        y +
        '    ######\n############################ \n############################',
    ),
  );
}
