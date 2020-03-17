import '@babel/polyfill/noConflict';
import { PricingCard, PricingTable } from 'app-marketplace-ui-components';
import VueScrollTo from 'vue-scrollto';
import Vue from 'vue';
import OrderForm from '../../components/OrderForm.vue';
import '../../setup';

const EDITION_OPTIONS = {
  'Office 365 Business Essentials': 'Office 365 Business Essentials',
  'Office 365 Business Premium': 'Office 365 Business Premium',
  'Microsoft 365 Business': 'Microsoft 365 Business'
};

Vue.use(VueScrollTo, {
  offset: -60
});

new Vue({
  el: '#app',
  name: 'configure-product',
  components: {
    'vf-order-form': OrderForm,
    'vf-pricing-card': PricingCard,
    'vf-pricing-table': PricingTable
  },
  data: {
    edition: undefined,
    editionOptions: EDITION_OPTIONS
  },
  mounted() {
    this.$nextTick(() => {
      const hash = unescape(window.location.hash.substr(1));

      if (Object.keys(EDITION_OPTIONS).includes(hash)) {
        this.edition = hash;
        this.navigateOrder();
      }
    });
  },
  methods: {
    navigateOrder() {
      VueScrollTo.scrollTo(document.querySelector('#order'));
    }
  }
});
