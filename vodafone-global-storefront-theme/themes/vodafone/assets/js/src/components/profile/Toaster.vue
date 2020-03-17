<template>
  <div :class="{'show-toaster': showToaster}" class="toaster toaster--min-padding toaster--sinking toaster--show" style="position: relative" id="toaster-added">
    <div class="spring">
      <div class="grid grid--gutter">
        <div v-if="!isAlreadyInBasket" class="grid__item grid__item--gutter grid__item--middle grid__item--md-1/1 grid__item--1/2 hide--sm align--center">
          <div class="grid hide--sm">
            <div class="grid__item grid__item--gutter grid__item--middle grid__item--md-1/1 grid__item--3/11 hide--sm align--left">
              <img :src="application.overview.image" :alt="application.overview.title">
            </div>
            <div class="grid__item grid__item--gutter grid__item--md-1/1 grid__item--8/11 hide--sm align--left">
              <h4 class="heading heading--4 heading-nomargin">
                {{ application.overview.title }}
              </h4>
              <p>
                Successfully added to your basket
              </p>
            </div>
          </div>
        </div>
        <div v-else class="grid__item grid__item--gutter grid__item--middle grid__item--md-1/1 grid__item--1/2 hide--sm align--center">
          <div class="grid hide--sm">
            <div class="grid__item grid__item--gutter grid__item--md-1/1 grid__item--11/11 hide--sm align--left">
              <h4 class="heading heading--4 heading-nomargin">
                This product edition is already in your basket. You’ll be redirected into the basket page in {{ counter }} second<span v-if="counter !== 1">s</span>
              </h4>
            </div>
          </div>
        </div>
        <div v-show="!isAlreadyInBasket" class="grid__item grid__item--gutter grid__item--1/2 align--right grid__item--middle">

          <div v-on:click="goToCart" class="button button--primary  button--primary--dark grid__item--1/2 grid__item--sm-1/2  no-gutter--all" id="toaster-viewcart" style="float: left;">
            View cart
          </div>
          <div v-on:click="continueShopping" class="button button--secondary no-gutter--bottom grid__item--1/2 grid__item--sm-1/2  no-gutter--all button--purple" id="toaster-continueshopping">
            Continue shopping
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { bus } from "../../main";

  export default {
    name: 'Toaster',
    data() {
      return {
        isAlreadyInBasket: false,
        counter: 5,
        showToaster: false
      }
    },
    props: [
      'application'
    ],
    methods: {
      continueShopping: function () {
       this.showToaster = false;
      },
      goToCart: function () {
        window.location.href = '/en-GB/pages/checkout'
      },
      countDown: function () {
        let interval = setInterval(() => {
          if (this.counter === 0) {
            clearInterval(interval);
            this.goToCart();
          }
          this.counter--;
        }, 1000)
      }
    },
    created() {
      bus.$on('alreadyinbasket', () => {
        this.isAlreadyInBasket = true;
        this.showToaster = true;
        this.countDown();
      });
      bus.$on('addedtobasket', () => {
        this.isAlreadyInBasket = false;
        this.showToaster = true;
      });
    }
  }
</script>
