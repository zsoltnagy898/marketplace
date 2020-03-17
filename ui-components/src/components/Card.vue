<template functional>
  <component :is="props.tag" class="card">
    <slot name="header" />
    <div class="card-content">
      <slot />
    </div>
    <slot name="footer" />
  </component>
</template>

<script>
export default {
  name: 'vf-card',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
};
</script>

<style>
.card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 2px;
  background: white;
}

.card-content {
  padding: 25px 30px;
}
</style>
