import { withOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/vue';
import 'vodafone-ws2/dist/scripts/group/lib/modernizr-custom.min.js';
import 'vodafone-ws2/dist/styles/group/framework.min.css';
import 'vodafone-ws2/dist/styles/group/main.min.css';
import './styles.css';

export const options = {
  name: 'App Marketplace UI',

  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,

  // Default addon panel options - specified here so that this will reset
  // when navigating back from a story where this is overridden.
  showAddonPanel: true,
  selectedAddonPanel: 'storybook/actions/actions-panel'
};

addDecorator(withOptions(options));

const context = require.context('../', true, /.stories.js$/);

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
