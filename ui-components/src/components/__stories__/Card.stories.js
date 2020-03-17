import { storiesOf } from '@storybook/vue';
import { Card, Heading, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, Card);
registerComponent(Vue, Heading);

const withInfo = createWithInfo({
  propTablesExclude: ['vf-heading']
});

const propsDescription = {
  tag: 'The HTML element to use.'
};

storiesOf('Components | Card', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <vf-card>
        <vf-heading tag="h1" variant="h4" inline>Card</vf-heading>
      </vf-card>
    `,
    propsDescription
  }))
  .add('header/footer', () => ({
    template: `
      <vf-card>
        <template #header>
          <div style="padding: 20px 0; background: #ccc; text-align: center;">
            #header
          </div>
        </template>
        <vf-heading tag="h1" variant="h4" inline>Card</vf-heading>
        <template #footer>
          <div style="padding: 20px 0; background: #ccc; text-align: center;">
            #footer
          </div>
        </template>
      </vf-card>
    `,
    propsDescription
  }));
