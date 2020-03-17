/* eslint-env node, es6 */

const dotenv = require('dotenv');
const fs = require('fs');
const { flowRight, partial, unary } = require('lodash');
const path = require('path');

/**
 * Load the environment settings for the current mode from `.env.{mode}` merged
 * with any private entries defined in `.env` if present.
 *
 * @param {string} mode
 *
 * @return {Object}
 */
module.exports = function getEnvironmentSettings(mode) {
  const getLocalPath = unary(partial(path.resolve, __dirname));
  const parseFromFile = unary(flowRight(dotenv.parse, fs.readFileSync));

  return Object.assign(
    {},
    ...[`.env.${mode}`, '.env']
      .map(getLocalPath)
      .filter(fs.existsSync)
      .map(parseFromFile)
  );
}
