<template>
    <div class="tabs" :class="{'tabs--fixed': isNavFixed}">
      <div class="tabs__navigation-wrapper">
        <nav class="js-tabs-navigation tabs__navigation tabs__navigation--fixed" role="tablist">
          <a v-on:click="navigateToSection('Overview')" class="js-tabs-tab tabs__tab" :class="{'tabs__tab--active': activeTab === 'Overview'}" aria-controls="#devices-features" role="tab" aria-selected="false">
            Overview
          </a>
          <a v-on:click="navigateToSection('Features')" class="js-tabs-tab tabs__tab" :class="{'tabs__tab--active': activeTab === 'Features'}" aria-controls="#devices-specifications" role="tab" aria-selected="false">
            Features
          </a>
          <a v-on:click="navigateToSection('Editions')" class="js-tabs-tab tabs__tab  js-products-reviews" :class="{'tabs__tab--active': activeTab === 'Editions'}" aria-controls="#devices-reviews" role="tab" aria-selected="false">
            Editions & Pricing
          </a>
          <a v-on:click="navigateToSection('Policies')" class="js-tabs-tab tabs__tab" :class="{'tabs__tab--active': activeTab === 'Policies'}" aria-controls="#devices-returns-cancellations" role="tab" aria-selected="false">
            Policies & Support
          </a>
<!--          <a v-on:click="navigateToSection('Addons-content')" class="js-tabs-tab tabs__tab" :class="{'tabs__tab&#45;&#45;active': activeTab === 'Addons-content'}" aria-controls="#devices-collection-delivery" role="tab" aria-selected="false">Add-ons</a>-->
        </nav>
      </div>
    </div>
</template>

<script>
  import VueScrollTo from 'vue-scrollto';

  Vue.use(VueScrollTo, {
    offset: -200
  });

  export default {
    name: 'SimpleTabs',
    props: [
      'application'
    ],
    data(){
      return {
        activeTab: 'Overview',
        isNavFixed: false
      }
    },
    created() {
      console.log(this.application)
    },
    methods: {
      handleScroll() {
        let scrollTop = window.scrollY;
        let sections = document.querySelectorAll("section[class^='section']");
        let navHeight = document.querySelector('nav.header').clientHeight;
        let toasterHeight = document.querySelector('.toaster.basket-toaster').clientHeight;

        for(let section of sections){
          let sectionTop = section.offsetTop;
          if(scrollTop + navHeight + (toasterHeight) >= sectionTop){
            this.activeTab = section.id;
          }
        }

        if(scrollTop >= navHeight + toasterHeight - 75){
          this.isNavFixed = true;
        } else {
          this.isNavFixed = false;
        }
      },
      navigateToSection(section) {
        VueScrollTo.scrollTo(document.querySelector('#' + section));
      },
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>
