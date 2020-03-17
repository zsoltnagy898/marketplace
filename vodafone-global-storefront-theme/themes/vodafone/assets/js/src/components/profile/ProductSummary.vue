<template>
  <div class="toaster toaster--min-padding toaster--sinking basket-toaster toaster--show" style="position: relative" >
    <div class="spring">
      <div class="grid grid--gutter">
        <div class="grid__item grid__item--gutter grid__item--middle grid__item--md-2/7 grid__item--1/2 hide--sm align--left">
          <img :src="application.summary.logoSrc" alt="Vodafone Smart platinum 7" class="basket-toaster__phone-image grid__item--1/3">
          <div class="basket-toaster__phone-info grid__item--2/3">
            <span class="heading heading--4 no-gutter--all">{{ application.overview.title }}</span>
            <span v-for="category in application.categories.items">{{ category.label }}</span>
          </div>
        </div>
        <div class="grid__item grid__item--gutter grid__item--middle grid__item--sm-1/1 grid__item--md-2/7 grid__item--1/2 align--right">
          <div class="grid">
          <div class="grid__item grid__item--middle grid__item--1/2 grid__item--sm-1/1 align--center">
          </div>
          <div class="grid__item grid__item--gutter grid__item--middle grid__item--sm-1/1 grid__item--md-2/7 grid__item--1/2 align--right">
            <a href="#Editions" class="button button--primary  button--primary--dark  no-gutter--all hide--sm">
              Select edition
            </a>
            <div class="grid grid--gutter hide--md hide--lg">
              <div class="grid__item grid__item--middle grid__item--1/2 grid__item--sm-1/1 align--center">
                <span class="heading heading--4 no-gutter--all">{{ application.overview.title }}</span>
              </div>
              <br><br>
              <div class="grid__item grid__item--middle grid__item--1/2 grid__item--sm-1/2 align--center"></div>
              <div class="grid__item grid__item--middle grid__item--1/2 grid__item--sm-1/1 align--center">
                <a href="#Editions" class="button button--primary  button--primary--dark  no-gutter--all">
                  Select edition
                </a>
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductSummary',
    props: [
      'application'
    ]
  }
</script>
