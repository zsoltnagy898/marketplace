import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import { Card, ChoiceForm, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, Card);
registerComponent(Vue, ChoiceForm);

const withInfo = createWithInfo({
  summary: 'A stylised form allowing selection of a single option in response to a presented question.',
  propTablesExclude: ['vf-card', 'vf-select']
});

const propsDescription = {
  title: 'The text to display as the main heading.',
  options: 'The set of available choices, mapped from label to value.'
};

storiesOf('Components | ChoiceForm', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <vf-card>
        <vf-choice-form
          title="Do you work with people often outside your company?"
          @submit="handleSubmit"
        />
      </vf-card>
    `,
    methods: {
      handleSubmit: action('submit')
    },
    propsDescription
  }))
  .add('with content', () => ({
    template: `
      <vf-card>
        <vf-choice-form
          title="How many employees do you have?"
          :options="{ 'Continue': true }"
          @submit="handleSubmit"
        >
          <vf-select value="1-10" style="width: 180px;">
            <option value="1-10">1-10</option>
            <option value="10-100">10-100</option>
            <option value="100+">100+</option>
          </vf-select>
        </vf-choice-form>
      </vf-card>
    `,
    methods: {
      handleSubmit: action('submit')
    },
    propsDescription
  }));
