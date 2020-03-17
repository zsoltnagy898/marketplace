const { attempt, isError } = require('lodash');
const path = require('path');

/**
 * Import the contents of a local config module if present.
 *
 * @param {string} filePath
 * @param {?any}   defaultValue
 *
 * @return {any}
 */
const requireConfigFile = (filePath, defaultValue = {}) => {
  const config = attempt(require, path.join('../../../', filePath));

  return isError(config) ? defaultValue : config;
};

module.exports = {
  requireConfigFile
};
