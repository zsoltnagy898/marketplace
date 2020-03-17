import { storiesOf } from '@storybook/vue';
import { Select, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, Select);

const withInfo = createWithInfo({
  propTablesExclude: ['fragment']
});

export const propsDescription = {
  name: 'The name of the control.',
  value: 'The value of the control. This can be set with v-model.',
  disabled: 'Indicates whether the user can interact with the element.',
  required: 'Indicates that an option with a non-empty string value must be selected.'
};

storiesOf('Components | Select', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <fragment>
        <vf-select v-model="selected">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </vf-select>
        <p>Selected: {{ selected }}</p>
      </fragment>
    `,
    data: () => ({
      selected: '1'
    }),
    propsDescription
  }))
  .add('disabled', () => ({
    template: `
      <vf-select v-model="selected" disabled>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </vf-select>
    `,
    data: () => ({
      selected: '1'
    }),
    propsDescription
  }));
