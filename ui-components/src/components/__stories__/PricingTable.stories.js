import { storiesOf } from '@storybook/vue';
import { PricingTable, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, PricingTable);

const withInfo = createWithInfo({
  propTablesExclude: ['vf-pricing-card', 'vf-pricing-table']
});

storiesOf('Components | PricingTable', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <vf-pricing-table>
        <vf-pricing-card
          title="Business Essentials"
          price="£9.40"
          priceDetail="(per user, per month, VAT included)"
          :features="[
            'Web version of Office apps: Outlook, Word, Excel, and PowerPoint (desktop apps not included)',
            '1 TB file storage & sharing',
            'Business-class email with 50GB mailbox',
            'One license covers 5 phones, 5 tablets, & 5 PCs or Macs per user'
          ]"
        />
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
      </vf-pricing-table>
    `
  }));
