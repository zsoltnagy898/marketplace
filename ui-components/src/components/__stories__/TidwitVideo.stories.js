import { withKnobs, text } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import { storiesOf } from '@storybook/vue';
import { TidwitVideo, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';
import { options } from '../../../.storybook/config';
import { createWithInfo } from './helpers';

registerComponent(Vue, TidwitVideo);

const withInfo = createWithInfo({
  summary: 'A video player for content from the [Tidwit](https://www.tidwit.com/) platform.'
});

const propsDescription = {
  accountId: 'The Tidwit account ID.',
  instanceDomain: 'The base domain of the Tidwit application instance.',
  accessToken: 'The Tidwit API access token.',
  contentId: 'The ID of the content resource to fetch.'
};

storiesOf('Components | TidwitVideo', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(withOptions({
    ...options,
    selectedAddonPanel: 'storybooks/storybook-addon-knobs'
  }))
  .add('default', () => ({
    template: `
      <tidwit-video
        account-id="${text('Account ID', 'vodafone')}"
        instance-domain="${text('Instance domain', 'ontidwitsandbox.com')}"
        access-token="${text('Access token', '')}"
        content-id="${text('Content ID', 'a3dbb0a4-2de6-4cb9-90cb-8651d2943a25')}"
      />`,
    propsDescription
  }));
