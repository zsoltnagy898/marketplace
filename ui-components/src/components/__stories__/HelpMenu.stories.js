import { storiesOf } from '@storybook/vue';
import { HelpMenu, Icon, registerComponent } from 'app-marketplace-ui-components';
import VueInfoAddon from 'storybook-addon-vue-info';
import Vue from 'vue';

registerComponent(Vue, HelpMenu);
registerComponent(Vue, Icon);

export const propsDescription = {
  label: 'The label text for the tab button.',
  title: 'The help CTA title to display.',
  variant: 'The style variant. This can be one of "default" or "primary".',
  links: 'The set of links to display, each with a title, icon and url.'
};

storiesOf('Components | HelpMenu', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    template: `
      <div style="position: relative; width: 100%; height: 365px; overflow: hidden;">
        <vf-help-menu
          label="Need help?"
          title="We're here to help"
          :links="[
            {
              title: 'Chat to us',
              icon: 'chat',
              url: '#'
            },
            {
              title: 'Call us',
              icon: 'call',
              url: '#'
            }
          ]"
          style="position: absolute; top: 65px;"
        />
      </div>
    `,
    propsDescription
  }))
  .add('with content', () => ({
    template: `
      <div style="position: relative; width: 100%; height: 365px; overflow: hidden;">
        <vf-help-menu
          label="Need help?"
          title="We're here to help"
          :links="[
            {
              title: 'Call us',
              icon: 'call',
              url: '#'
            }
          ]"
          style="position: absolute; top: 65px;"
        >
          <p class="lead">Contact us on 01234 567890.</p>
        </vf-help-menu>
      </div>
    `,
    propsDescription
  }));
