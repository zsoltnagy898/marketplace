import { ProductConfigurator, configure } from 'app-marketplace-ui-components';
import { pick } from 'lodash';
import Vue from 'vue';
import office365Logo from '../../../images/office-365.svg';
import initPropsFromDataAttrs from '../mixins/initPropsFromDataAttrs';

configure({
  // Use inline icon spritesheet
  iconSpritesheetPath: null
});

new Vue({
  el: '#app',
  name: 'configure-product',
  components: {
    'vf-product-configurator': ProductConfigurator
  },
  mixins: [initPropsFromDataAttrs],
  props: {
    officePremiumUrl: {
      type: String,
      required: true
    },
    officeEssentialsUrl: {
      type: String,
      required: true
    }
  },
  data: {
    questions: [
      {
        key: 'business-type',
        title: 'What is your line of business?',
        input: true
      },
      {
        key: 'employee-count',
        title: 'How many employees are there in your company?',
        input: {
          type: 'select',
          options: {
            '1-10': '1-10',
            '10-100': '10-100',
            '100+': '100+'
          }
        }
      },
      {
        key: 'online-access',
        title: 'Do your employees wish to write and edit information online?',
        detail: `
          Cloud adoption rate has increased to about 81% in 2018, compared to 59% in 2016.

          The usage of Office 365 among organizations globally has reached over 56% in 2018, up from 34% in 2016.
        `
      },
      {
        key: 'security-compliance',
        title: 'Is storage & security compliance a priority to you?',
        detail: `
          Over five in six (83%) organisations using the cloud prioritise a high level of security when looking for a cloud solution, and valued scalability (68%) and the capacity to archive (52%).
        `
      },
      {
        key: 'data-privacy',
        title: 'Are you concerned about privacy of customer data?',
        detail: `
          75% will not buy a product from a company – irrespective of product benefits – if they don't trust the company to protect their data.

          73% think businesses are focused on profits over addressing consumers' security needs.

          60% are more concerned about cybersecurity than a potential war.
        `
      },
      {
        key: 'office-desktop',
        title: 'Do require the latest Office applications and automatic updates on any device?'
      },
      {
        key: 'premium-apps',
        title: 'Are you interested in any of the following business apps at your company?',
        detail: `
          MS Invoicing
          Bookings
          MileIQ
          Microsoft Teams
        `
      }
    ]
  },
  methods: {
    getSelectedProduct(results) {
      const significantResults = Object.values(pick(results, ['office-desktop', 'premium-apps']));

      if (significantResults.length === 2) {
        return {
          ...(
            significantResults.includes(true)
              ? {
                displayName: 'Office 365 Business Premium',
                url: this.officePremiumUrl
              } : {
                displayName: 'Office 365 Business Essentials',
                url: this.officeEssentialsUrl
              }
          ),
          imageUrl: office365Logo
        };
      }

      return null;
    },
    handleCancel: () => {
      window.location = '/en-US/home';
    },
    handleQuestionSubmit: () => {
      // TODO submit to analytics provider
    }
  }
});
