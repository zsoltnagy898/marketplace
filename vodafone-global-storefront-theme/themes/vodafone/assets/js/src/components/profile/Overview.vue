<template>
  <div class="stage" data-js="_gallery, _products">
    <div class="spring">
      <div class="grid grid--gutter">
        <div class="grid__item grid__item--gutter grid__item--md-1/1 grid__item--1/2 align--center flush--sm-bottom stage__header">
          <div class="hide--lg stage__container stage__heading">
            <h2 class="heading heading--3">
              {{ application.overview.title }}
            </h2>
            <p>{{ application.overview.description }}</p>
            <a v-if="application.overview.callToActions.demo.label" target="_blank" :href="application.overview.callToActions.demo.href" class="button button--primary  button--primary--dark  no-gutter--all">
              {{ application.overview.callToActions.demo.label }}
            </a>
          </div>
          <img :src="application.overview.image" alt="iPhone 6s" class="js-products-image stage__image">
        </div>
        <div class="grid__item grid__item--gutter grid__item--md-1/1 grid__item--1/2 stage__information stage__information--light">
          <div class="hide--md hide--sm">
            <h2 class="heading heading--3">
              {{ application.overview.title }}
            </h2>
            <p>{{ application.overview.description }}</p>
            <div class="grid grid--gutter">
              <div class="grid__item grid__item--gutter grid__item--1/1 align--left">
                <a v-on:click="openModal" v-if="application.overview.callToActions.demo.label" class="button button--secondary  button--secondary--dark  no-gutter--all">
                  {{ application.overview.callToActions.demo.label }}
                </a>
                <a  href="#Editions" class="button button--primary no-gutter--all">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { bus } from "../../main";

  export default {
    name: 'Overview',
    data () {
      return {
        isModalOpen: false
      }
    },
    props: [
      'application'
    ],
    methods: {
      openModal: function () {
        this.isModalOpen = true;
        bus.$emit('toggle-modal', this.isModalOpen);
      },
    }
  }
</script>
