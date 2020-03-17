import { storiesOf } from '@storybook/vue';
import { ProgressBar, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, ProgressBar);

const withInfo = createWithInfo({
  summary: 'A bar representing visual progress.'
});

export const propsDescription = {
  value: 'The value to represent, between 0 and 1.',
  animated: 'Whether to animate changes in value.'
};

storiesOf('Components | ProgressBar', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: '<vf-progress-bar :value="0.5" animated />',
    propsDescription
  }));
