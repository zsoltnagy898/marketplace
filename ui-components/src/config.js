const config = {
  /**
   * The path to the base WS2 SVG icon spritesheet.
   *
   * @type {?string}
   */
  iconSpritesheetPath: '/svg/group/sprite.svg'
};

/**
 * Override base library configuration options.
 *
 * @param {Object} options
 */
export function configure(options) {
  Object.assign(config, options);
}

export default config;
