<template functional>
  <component
    :is="props.tag"
    v-bind="data.attrs"
    :class="[data.class, data.staticClass]"
  >
    <span
      :class="[
        'js-form-label',
        'form__label',
        { 'form__label--required': props.required }
      ]"
    >
      {{ props.label }}
    </span>
    <slot />
  </component>
</template>

<script>
export default {
  name: 'vf-field',
  props: {
    tag: {
      type: String,
      default: 'label'
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  }
};
</script>
