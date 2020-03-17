const fs = require('fs');
const _path = require('path');

/**
 * Include the contents of a file inline.
 *
 * @api public
 *
 * @param {string} path
 *
 * @return {string}
 */
function inline(path) {
  return fs.readFileSync(_path.resolve(__dirname, '../../', path));
}

module.exports = inline;
