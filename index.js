const chalk = require('chalk');
const randomColor = require('randomcolor');

const command = process.argv;
const UserInput = randomColor({
  hue: command[2],
  luminosity: command[3],
});

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
    chalk.hex(UserInput)(
      '############################ \n############################\n######     ' +
        UserInput +
        '    ######\n############################ \n############################',
    ),
  );
}
