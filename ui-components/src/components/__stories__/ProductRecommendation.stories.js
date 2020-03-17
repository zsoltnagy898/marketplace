import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import { ProductRecommendation, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, ProductRecommendation);

const withInfo = createWithInfo({
  summary: 'A stylised view presenting a recommended product and CTA.',
  propTablesExclude: ['vf-card']
});

const propsDescription = {
  product: 'The product data to display.',
  cta: 'Text for the primary call-to-action.'
};

storiesOf('Components | ProductRecommendation', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <vf-card>
        <vf-product-recommendation
          :product="{
            displayName: 'Office 365 Business Essentials',
            imageUrl: '/images/office-365.svg',
            url: '#'
          }"
          cta="Would you like to proceed with your order?"
          @cancel="handleCancel"
        />
      </vf-card>
    `,
    methods: {
      handleCancel: action('cancel')
    },
    propsDescription
  }));
