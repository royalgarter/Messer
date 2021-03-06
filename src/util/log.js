const chalk = require("chalk");

/**
 * Wrapper around console.log
 * @param {String} content - content to log
 * @param {String} color - hexcode
 */
function log(content, color) {
  if (!content) return null;
  if (color) {
    if (chalk[color]) {
      return console.log(chalk[color](content));
    }
    return console.log(chalk.hex(color)(content));
  }

  return console.log(content);
}

module.exports = log;
