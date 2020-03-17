<template>
  <nav
    :class="[
      'side-toggle side-toggle--viewport-height-fix',
      { 'side-toggle--show': open }
    ]"
  >
    <button
      :class="[
        'side-toggle__button',
        variant === 'primary' ? 'background-primary' : null
      ]"
      type="button"
      :aria-expanded="open"
      @click="open ^= true"
    >
      <Heading
        tag="span"
        variant="h4"
        class="no-gutter--all side-toggle__tab-text"
        inline
      >
        {{ label }}
        <Icon
          class="side-toggle__chevron"
          name="chevron-left"
          size="sm"
          focusable="false"
        />
      </Heading>
    </button>
    <div class="side-toggle__content" :aria-hidden="!open">
      <Heading
        tag="span"
        variant="h3"
        class="heading--leading gutter--bottom"
      >
        {{ title }}
      </Heading>
      <slot />
      <div class="grid gutter--top">
        <div
          v-for="link in links"
          class="grid__item grid__item--align-center grid__item--1/3"
        >
          <a :href="link.url" class="side-toggle__link">
            <div class="side-toggle__icon-circle">
              <Icon
                class="side-toggle__icon"
                :name="link.icon"
                size="sm"
                focusable="false"
              />
            </div>
            <span class="side-toggle__detail">{{ link.title }}</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Heading from './Heading.vue';
import Icon from './Icon.vue';

export default {
  name: 'vf-help-menu',
  components: {
    Heading,
    Icon
  },
  props: {
    label: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'default',
      validate: value =>
        ['default', 'primary'].includes(value)
    },
    links: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    open: false
  })
};
</script>

<style>
.side-toggle {
  z-index: 5;
}

.background-primary {
  background: #e60000;
}

@media (max-width: 1024px) {
  .side-toggle {
    bottom: 0px;
    left: auto;
    top: auto;
    right: 0;
    width: auto;
    transform: translateY(100%);
  }

  .side-toggle--show {
    transform: translateY(0);
  }

  .side-toggle__button {
    bottom: 100%;
    left: 0;
    right: 0;
    top: auto;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .side-toggle__button span {
    position: static;
    transform: none;
  }
}

@media (max-width: 640px) {
  .side-toggle {
    width: 100%;
    left: 0;
  }

  .side-toggle__button {
    height: 50px;
  }
}
</style>
