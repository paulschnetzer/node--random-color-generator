const chalk = require('chalk');
const randomColor = require('randomcolor');

const command = process.argv;
const UserInput = randomColor({
  hue: command[2],
  luminosity: command[3],
});

const UserInputColor = randomColor();
if (command[2] === undefined) {
  console.log(
    chalk.hex(UserInputColor)(
      '############################ \n############################\n######     ' +
        UserInputColor +
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
