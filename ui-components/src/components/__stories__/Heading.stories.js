import { storiesOf } from '@storybook/vue';
import { Heading, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, Heading);

const withInfo = createWithInfo({
  summary: '',
  propTablesExclude: ['fragment']
});

export const propsDescription = {
  tag: 'The HTML element to use.',
  variant: 'The heading style variant, "h[1-6]". If empty, this will be matched to the heading tag given.',
  inline: 'Set whether to behave as an inline element.',
  align: 'Set the text-align on the element.',
  weight: 'The heading font weight, one of "light", "regular" or "bold".'
};

storiesOf('Components | Heading', module)
  .addDecorator(withInfo)
  .add('variants', () => ({
    template: `
      <fragment>
        <vf-heading tag="h1">h1 Heading</vf-heading>
        <vf-heading tag="h2">h2 Heading</vf-heading>
        <vf-heading tag="h3">h3 Heading</vf-heading>
        <vf-heading tag="h4">h4 Heading</vf-heading>
        <vf-heading tag="h5">h5 Heading</vf-heading>
        <vf-heading tag="h6">h6 Heading</vf-heading>
      </fragment>
    `,
    propsDescription
  }));
