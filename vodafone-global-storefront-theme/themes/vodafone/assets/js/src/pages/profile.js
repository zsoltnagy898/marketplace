
const Vue = window.Vue;

import SimpleTabs from '../components/profile/SimpleTabs.vue';
import ProductSummary from '../components/profile/ProductSummary.vue';
import Overview from '../components/profile/Overview.vue';
import Editions from '../components/profile/Editions.vue';
import Resources from '../components/profile/Resources.vue';
import Support from '../components/profile/Support.vue';
import Addons from '../components/profile/Addons.vue';
import Modal from '../components/profile/Modal.vue';



new Vue({
  el: '#apptop',
  name: 'kotsogLaci',
  components: {
    SimpleTabs,
    ProductSummary,
    Overview,
    Editions,
    Resources,
    Support,
    Addons,
    Modal

  },
  methods: {
    equalheight: function (container) {
      var currentTallest = 0;
      var currentRowStart = 0;
      var rowDivs = [];
      var $el;
      var topPosition = 0;
      var currentDiv = 0;
      $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPosition = $el.position().top;

        if (currentRowStart != topPosition) {
          for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
          }
          rowDivs.length = 0; // empty the array
          currentRowStart = topPosition;
          currentTallest = $el.height();
          rowDivs.push($el);
        } else {
          rowDivs.push($el);
          currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
        }
      });
    },
    toggleAccordion: function () {
      $(".js-accordion-heading").on("click", function(){
      $(this).toggleClass('accordion__heading--active');
      $(this).next(".js-accordion-content").slideToggle();
      });
    },
    refreshCartIcon: function () {
      var drophistory = JSON.parse(localStorage.getItem("basket")) || [];
      if (drophistory.length < 1) {
        $('#cart-on-header').addClass('hide');
      } else {
        $('#cart-on-header').text(drophistory.length);
      }
    },
    continueShopping: function () {
      var continueShoppingButton = document.getElementById('toaster-continueshopping');
      var toasterAdd = document.getElementById('toaster-added');

      toasterAdd.classList.remove('show-toaster');
    },
    goToCart: function () {
      window.location.href = '/en-GB/pages/checkout'
    },

  },
  computed: {},
  mounted: function () {
    this.toggleAccordion();
    // this.equalheight('.bundle-element .bundle')
  }
});
