import { withOptions } from '@storybook/addon-options';
import { storiesOf } from '@storybook/vue';
import { doc } from 'storybook-readme';
import { options } from '../../.storybook/config';
import configuration from '../Configuration.md';
import usage from '../Usage.md';
import readme from '../../README.md';

storiesOf('Documentation | Usage guide', module)
  .addDecorator(
    withOptions({
      ...options,
      showAddonPanel: false
    })
  )
  .add('README', doc(readme))
  .add('Basic usage', doc(usage))
  .add('Configuration', doc(configuration));
