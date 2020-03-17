/*!
 * Vodafone App Marketplace landing pages
 *
 * @copyright Vodafone Group 2019
 */
import '@babel/polyfill/noConflict';
import Vue from 'vue';
import { HelpMenu, registerComponent } from 'app-marketplace-ui-components';
import './setup';

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
