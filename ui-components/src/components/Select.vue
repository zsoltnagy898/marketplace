<template>
  <span class="form__input form__input--selectable">
    <select
      v-bind="{ name: name, disabled: disabled, required: required, value: value }"
      :class="['form__select', { 'form__input--disabled': disabled }]"
      @input="$emit('input', $event.target.value)"
      @change="$emit('input', $event.target.value)"
    >
      <slot />
    </select>
    <Icon
      class="form__icon"
      name="chevron-down"
      role="presentation"
      size="sm"
      focusable="false"
    />
  </span>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'vf-select',
  components: {
    Icon
  },
  props: {
    name: String,
    value: [String, Number],
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
