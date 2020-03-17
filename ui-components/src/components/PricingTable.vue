<template functional>
  <div
    v-bind="data.attrs"
    :class="[
      'pricing-table',
      data.class,
      data.staticClass
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'vf-pricing-table'
};
</script>

<style>
.pricing-table {
  margin-right: -20px;
  margin-left: -20px;
}

.pricing-table > * {
  margin: 0 20px;
  margin-bottom: 20px;
}

@media (max-width: 1024px) {
  .pricing-table {
    flex-wrap: wrap;
  }
}

@media (min-width: 640px) {
  .pricing-table {
    display: flex;
    align-items: stretch;
    justify-content: center;
  }

  .pricing-table > * {
    max-width: 360px;
  }
}

@media (max-width: 640px) {
  .pricing-table {
    margin-right: -10px;
    margin-left: -10px;
  }

  .pricing-table > * {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
