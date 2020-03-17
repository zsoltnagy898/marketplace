<template>
  <article>
    <img class="image" :src="product.imageUrl" :alt="product.displayName">
    <Heading tag="h2" variant="h4" weight="bold" align="center">
      {{ product.displayName }}
    </Heading>
    <Heading class="cta" tag="p" variant="h4" weight="regular" align="center">
      {{ cta }}
    </Heading>
    <slot />
    <div class="options">
      <Button
        type="button"
        variant="secondary"
        @click="$emit('cancel', $event)"
      >
        No
      </Button>
      <Button :href="product.url">Yes</Button>
    </div>
  </article>
</template>

<script>
import Button from './Button.vue';
import Heading from './Heading.vue';

export default {
  name: 'vf-product-recommendation',
  components: {
    Button,
    Heading
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    cta: String
  }
};
</script>

<style scoped>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    margin: 20px 0;
    max-height: 90px;
    max-width: 450px;
  }

  .cta {
    margin-top: 0;
  }

  .options {
    display: flex;
    justify-content: stretch;
    padding: 40px 0;
    width: 100%;
    max-width: 550px;
  }

  .options .button {
    flex-grow: 1;
    margin: 0 10px;
  }
</style>
