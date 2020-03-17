<template>
  <input
    v-bind="{ name, type, disabled, required, value }"
    :class="['form__input', { 'form__input--disabled': disabled }]"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'vf-input',
  props: {
    name: String,
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  }
};
</script>
