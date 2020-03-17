<template functional>
  <component
    :is="props.tag"
    v-bind="data.attrs"
    :class="[
      'heading heading--'
        + (
          /^h[1-6]$/.test(props.tag) && !props.variant
            ? props.tag
            : props.variant
        ).slice(-1),
      { 'heading--inline': props.inline },
      props.weight ? 'heading--' + props.weight : null,
      props.align ? 'align--' + props.align : null,
      data.class,
      data.staticClass
    ]"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'vf-heading',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    variant: {
      type: String,
      validate: value =>
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    inline: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      validate: value =>
        ['left', 'center', 'right'].includes(value)
    },
    weight: {
      type: String,
      validate: value =>
        ['light', 'regular', 'bold'].includes(value)
    }
  }
};
</script>
