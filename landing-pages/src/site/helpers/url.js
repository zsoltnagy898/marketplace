const { get } = require('lodash');
const _url = require('url');
const { requireConfigFile } = require('./utils');

/**
 * Get the absolute URL to a given local site path.
 *
 * @api public
 *
 * @param {string} path
 * @param {Object} options
 *
 * @return {string}
 */
function url(path, options) {
  const { BASE_URL = '/', URL_MAP, production } = options.data.root;
  const resolvedPath = _url.resolve(BASE_URL, path);

  return production && URL_MAP
    ? get(requireConfigFile(URL_MAP), path, resolvedPath)
    : resolvedPath;
}

module.exports = url;
