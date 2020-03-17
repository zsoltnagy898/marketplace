/**
 * Register one or more library components globally on the given Vue object.
 *
 * @see {@link https://vuejs.org/v2/guide/components-registration.html#Global-Registration|Component Registration}
 *
 * @param {Vue}       Vue
 * @param {...Object} components
 */
export default function registerComponent(Vue, ...components) {
  components.forEach(Component => Vue.component(Component.name, Component));
}
