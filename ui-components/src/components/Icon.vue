<template>
  <svg
    :class="[
      'icon',
      {
        xs: 'icon--extra-small',
        sm: 'icon--small',
        md: 'icon--medium',
        lg: 'icon--large',
        xl: 'icon--extra-large'
      }[size]
    ]"
    :role="role"
  >
    <use :xlink:href="src" />
  </svg>
</template>

<script>
import { toString } from 'lodash';
import config from '../config';

export default {
  name: 'vf-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'image'
    },
    size: {
      type: String,
      default: 'md',
      validate: value => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
  },
  computed: {
    src: function () {
      return toString(config.iconSpritesheetPath) + '#icon-' + this.name;
    }
  }
};
</script>

<style>
.icon {
  background: transparent;
}
</style>
