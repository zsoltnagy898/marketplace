import { storiesOf } from '@storybook/vue';
import { Input, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, Input);

const withInfo = createWithInfo({
  propTablesExclude: ['fragment']
});

export const propsDescription = {
  name: 'The name of the control.',
  value: 'The value of the control. This can be set with v-model.',
  type: 'The HTML imput element type.',
  disabled: 'Indicates whether the user can interact with the element.',
  required: 'Indicates that an option with a non-empty string value must be selected.'
};

storiesOf('Components | Input', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <fragment>
        <vf-input v-model="value" />
        <p>Value: {{ value }}</p>
      </fragment>'`,
    data: () => ({
      value: ''
    }),
    propsDescription
  }))
  .add('disabled', () => ({
    template: '<vf-input v-model="value" disabled />',
    data: () => ({
      value: ''
    }),
    propsDescription
  }));
