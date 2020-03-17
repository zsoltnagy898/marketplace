import VueInfoAddon, { withInfo as baseWithInfo } from 'storybook-addon-vue-info';

/**
 * An aliased Storybook decorator for `storybook-addon-vue-info` configured
 * with default options.
 *
 * @return {Function}
 */
export const withInfo = VueInfoAddon;

/**
 * Create a Storybook decorator version of `withInfo` from
 * `storybook-addon-vue-info` configured with the given options.
 *
 * @param {?Object} options
 *
 * @return {Function}
 */
export function createWithInfo(options = {}) {
  return (storyFn, context) => baseWithInfo(options)(storyFn)(context);
}
