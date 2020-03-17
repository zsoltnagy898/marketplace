<template>
  <div
    :class="[
      'video-stream',
      !playing ? 'video-stream--paused' : null,
      ended ? 'video-stream--paused' : null
    ]"
    v-on="{
      mouseenter: handleMouseEnter,
      mouseleave: playing ? handleMouseLeave : null
    }"
  >
    <video
      class="video-stream__video"
      role="application"
      aria-label="video"
      ref="video"
      v-bind="{ ...videoAttrs, width, height, poster }"
      @ended="handleVideoEnded"
    >
      <slot />
    </video>
    <button
      :class="[
        'video-stream__toggle',
        hideControls ? 'video-stream__toggle--hide' : null
      ]"
      type="button"
      :aria-label="playing ? 'Pause' : 'Play'"
      @click="handleToggleClick"
    >
      <Icon
        :name="playing ? 'pause' : 'play'"
        focusable="false"
        :class="[
          'video-stream__toggle-icon',
          'video-stream__toggle-icon--' + playing ? 'pause' : 'play'
        ]"
      />
    </button>
  </div>
</template>

<script>
import { omit } from 'lodash';
import Icon from './Icon.vue';

export default {
  name: 'vf-video',
  inheritAttrs: false,
  components: {
    Icon
  },
  props: {
    poster: String,
    width: [String, Number],
    height: [String, Number]
  },
  data: () => ({
    playing: false,
    ended: false,
    hideControls: false
  }),
  computed: {
    videoAttrs: function () {
      return omit(this.$attrs, 'controls');
    }
  },
  methods: {
    handleToggleClick() {
      this.$refs.video[this.playing ? 'pause' : 'play']();
      this.playing ^= true;
    },
    handleVideoEnded() {
      this.playing = false;
      this.ended = true;
    },
    handleMouseEnter() {
      this.hideControls = false;
    },
    handleMouseLeave() {
      this.hideControls = true;
    }
  }
};
</script>
