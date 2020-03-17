import { storiesOf } from '@storybook/vue';
import { Icon, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { createWithInfo } from './helpers';

registerComponent(Vue, Icon);

const withInfo = createWithInfo({
  summary: `
    Render a named
    [WS2 SVG icon](http://master.vodafone-ws2.dddev.io/docs/directives/svg).
  `
});

const propsDescription = {
  name: 'The name of the icon in the WS2 icon spritesheet.',
  role: 'The HTML role of the image. This should be set to "presentation" if not a content element, such as a background.',
  size: 'The icon size. This can be one of "xs", "sm", "md", "lg", or "xl".'
};

storiesOf('Components | Icon', module)
  .addDecorator(withInfo)
  .add('all sizes', () => ({
    template: `
      <div style="display: flex; align-items: center; justify-content: space-around; max-width: 400px;">
        <vf-icon name="vodafone-logo" size="xs" />
        <vf-icon name="vodafone-logo" size="sm" />
        <vf-icon name="vodafone-logo" size="md" />
        <vf-icon name="vodafone-logo" size="lg" />
        <vf-icon name="vodafone-logo" size="xl" />
      </div>
    `,
    propsDescription
  }));
