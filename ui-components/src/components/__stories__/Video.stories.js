import { storiesOf } from '@storybook/vue';
import { Video, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { withInfo } from './helpers';

registerComponent(Vue, Video);

export const propsDescription = {
  width: 'The width of the video\'s display area, in CSS pixels.',
  height: 'The height of the video\'s display area, in CSS pixels.',
  poster: 'A URL for an image to be shown while the video is downloading.'
};

storiesOf('Components | Video', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    template: `
      <vf-video style="max-width: 1080px">
        <source src="/videos/mute_raw/VodaVideo.mp4" type="video/mp4">
        <source src="/videos/mute_raw/VodaVideo.webm" type="video/webm">
      </vf-video>
    `,
    propsDescription
  }));
