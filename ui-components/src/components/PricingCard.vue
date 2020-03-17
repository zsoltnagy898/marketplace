<template>
  <article class="pricing-card">
    <header class="pricing-card-header">
      <Heading class="no-gutter--all" tag="h2" variant="h3" align="center">{{ title }}</Heading>
    </header>

    <div class="gutter--all">
      <Heading class="no-gutter--all" tag="h3" variant="h3" weight="regular">{{ price }}</Heading>
      <p v-if="priceDetail" class="no-gutter--top">{{ priceDetail }}</p>
      <ul class="pricing-features-list">
        <li v-for="feature in features" class="grid__item grid__item--1/1">
          <Icon class="pricing-features-checkmark" name="tick" size="xs" />
          <div>{{ feature }}</div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import Heading from './Heading.vue';
import Icon from './Icon.vue';

export default {
  name: 'vf-pricing-card',
  components: {
    Heading,
    Icon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    priceDetail: String,
    features: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.pricing-card {
  border: 1px solid #5e2750;
  background: white;
}

.pricing-card-header {
  padding: 7px;
  background-color: #5e2750;
  color: white;
}

.pricing-features-list {
  margin-top: 25px;
  padding-inline-start: 35px;
}

.pricing-features-list li {
  line-height: 1.4;
  margin-bottom: 1em;
}

.pricing-features-checkmark {
  position: absolute;
  margin-top: 2px;
  margin-left: -30px;
  stroke: #40871a;
}
</style>
