import { storiesOf } from '@storybook/vue';
import { FieldCaption, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, FieldCaption);

const withInfo = createWithInfo({
  propTablesExclude: ['vf-field-caption']
});

storiesOf('Components | FieldCaption', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <vf-field-caption>
        Please enter a valid first name.
      </vf-field-caption>
    `
  }));
