import { storiesOf } from '@storybook/vue';
import { Field, Input, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, Field);
registerComponent(Vue, Input);

const withInfo = createWithInfo({
  propTablesExclude: ['vf-input']
});

const propsDescription = {
  tag: 'The HTML element to use.',
  label: 'The label text to display.',
  required: 'Set whether to visually mark the field as required.'
};

storiesOf('Components | Field', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <vf-field label="Input field">
        <vf-input />
      </vf-field>
    `,
    propsDescription
  }))
  .add('required', () => ({
    template: `
      <vf-field label="Required input field" required>
        <vf-input required />
      </vf-field>
    `,
    propsDescription
  }));
