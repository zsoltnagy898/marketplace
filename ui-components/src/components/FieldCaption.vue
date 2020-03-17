<template>
  <div
    class="alert alert--light alert--warning alert--arrow validation__warning"
  >
    <div class="caption">
      <div class="caption__media caption__media--top alert__media">
        <Icon class="alert__icon" name="block" size="sm" />
      </div>
      <div class="caption__text caption__text--top alert__text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'vf-field-caption',
  components: {
    Icon
  }
};
</script>
