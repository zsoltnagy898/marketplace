<template>
<article>
  <Heading tag="h2" variant="h4" weight="regular" align="center">
    {{ title }}
  </Heading>
  <div v-if="$slots.default" class="content">
    <slot />
  </div>
  <div class="options">
    <Button
      v-for="(value, label) in options"
      :key="label"
      type="button"
      :disabled="disabled"
      @click="$emit('submit', value)"
    >
      {{ label }}
    </Button>
  </div>
</article>
</template>

<script>
  import Button from './Button.vue';
  import Heading from './Heading.vue';

  export default {
    name: 'vf-choice-form',
    components: {
      Button,
      Heading
    },
    props: {
      title: {
        type: String,
        required: true
      },
      options: {
        type: Object,
        default: () => ({
          'No': false,
          'Yes': true
        })
      },
      disabled: Boolean
    }
  };
</script>

<style scoped>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    display: block;
    max-width: 800px;
    text-align: center;
  }

  .content svg {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;
  }



  .content .form__input {
    margin: 0 auto !important;
    display: block !important;
  }

  .options {
    display: block;
    padding: 40px 0;
    width: 100%;
    max-width: 600px;
    text-align: center;
  }

  .options .button {
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    max-width: 280px;
    width: 100%;
  }
</style>
