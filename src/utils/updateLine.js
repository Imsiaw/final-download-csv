const readline = require("readline");

const updateLine = (newLine) => {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(newLine);
};

module.exports = { updateLine };
