import { storiesOf } from '@storybook/vue';
import { PricingCard, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { withInfo } from './helpers';

registerComponent(Vue, PricingCard);

export const propsDescription = {
  title: 'The title to display.',
  price: 'The full price string to display.',
  priceDetail: 'The price detail text to display.',
  features: 'The set of product feature descriptions.'
};

storiesOf('Components | PricingCard', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <vf-pricing-card
        title="Business Premium"
        price="£9.40"
        priceDetail="(per user, per month, VAT included)"
        :features="[
          'Desktop & web version of Office 2016 apps: Outlook, Word, Excel, and PowerPoint. HD video conferencing with Skype for Business',
          '1 TB file storage & sharing',
          'Business-class email with 50GB mailbox',
          'One license covers 5 phones, 5 tablets, & 5 PCs or Macs per user'
        ]"
      />
    `,
    propsDescription
  }));
