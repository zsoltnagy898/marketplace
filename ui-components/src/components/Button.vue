<template functional>
  <component
    :is="props.href ? 'a' : 'button'"
    v-bind="data.attrs"
    :class="[
      'button',
      {
        primary: 'button--primary',
        secondary: 'button--secondary',
        tertiary: 'button--tertiary',
        transparent: 'button--transparent'
      }[props.variant],
      { 'button--disabled': props.disabled },
      data.class,
      data.staticClass
    ]"
    :type="props.type"
    :href="props.href"
    :disabled="props.disabled"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'vf-button',
  props: {
    type: String,
    href: String,
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary',
      validate: value =>
        ['primary', 'secondary', 'tertiary', 'transparent'].includes(value)
    }
  }
};
</script>
