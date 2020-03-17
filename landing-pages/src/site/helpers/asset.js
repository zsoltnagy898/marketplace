const { get } = require('lodash');
const url = require('url');
const { requireConfigFile } = require('./utils');

/**
 * Get the absolute URL to a given asset file.
 *
 * @api public
 *
 * @param {string} path
 * @param {Object} options
 *
 * @return {string}
 */
function asset(path, options) {
  const { ASSET_URL = '/', ASSET_MAP, production } = options.data.root;
  const resolvedPath = url.resolve(ASSET_URL, path);

  return production && ASSET_MAP
    ? get(requireConfigFile(ASSET_MAP), path, resolvedPath)
    : resolvedPath;
}

module.exports = asset;
