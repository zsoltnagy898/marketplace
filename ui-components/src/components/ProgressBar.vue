<template functional>
  <div class="progress-bar">
    <div
      :class="[
        'progress-bar-inner',
        { 'progress-bar-inner-animated': props.animated }
      ]"
      :style="{
        width: (props.value * 100) + '%'
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'vf-progress-bar',
  props: {
    value: {
      type: Number,
      required: true
    },
    animated: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
  div {
    height: 8px;
  }

  .progress-bar {
    width: 100%;
    background: #ccc;
  }

  .progress-bar-inner {
    background: #3F8700;
  }

  .progress-bar-inner-animated {
    transition: width .2s;
  }
</style>
