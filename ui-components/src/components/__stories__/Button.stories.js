import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';
import { Button, registerComponent } from 'app-marketplace-ui-components';
import VueInfoAddon from 'storybook-addon-vue-info';
import Vue from 'vue';

registerComponent(Vue, Button);

const propsDescription = {
  type: 'The HTML type of the button.',
  href: 'The URL of a linked resource. This will render an anchor element.',
  disabled: 'Indicates whether the user can interact with the element.',
  variant: 'The style variant. This can be one of "primary", "secondary", "tertiary", or "transparent".'
};

storiesOf('Components | Button', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    template: '<vf-button @click="handleClick">Button</vf-button>',
    methods: {
      handleClick: action('click')
    },
    propsDescription
  }))
  .add('link', () => ({
    template: '<vf-button href="#">Button</vf-button>',
    propsDescription
  }))
  .add('disabled', () => ({
    template: '<vf-button disabled>Button</vf-button>',
    propsDescription
  }));
