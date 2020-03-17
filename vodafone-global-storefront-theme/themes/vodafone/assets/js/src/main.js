/*!
 * Vodafone Global Storefront theme
 *
 * @copyright Vodafone Group 2019
 */

/* eslint no-console: off */

import {
  HelpMenu,
  configure,
  registerComponent
} from 'app-marketplace-ui-components';

// Reference included CDN version of Vue 2.x
const Vue = window.Vue;

configure({
  // Use inline icon spritesheet
  iconSpritesheetPath: null
});


export const bus = new Vue();

// Register global components
registerComponent(Vue, ...[
  HelpMenu
]);

// Create Vue instances for each partial template region
for (const el of document.querySelectorAll('[data-vue-partial]')) {
  new Vue({
    el,
    name: 'partial'
  });
}
