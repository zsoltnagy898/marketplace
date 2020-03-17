# Basic usage

## In a component

When composed in another Vue component, library components should be imported and referenced using local registration. Here, the prefix `vf-` can be optionally assigned.

```js
import { Button } from 'app-marketplace-ui-components';

export default {
  components: {
    Button
  },
  template: `
    <Button href="#">Button</Button>
    ...
  `
};
```

## Globally

Global registration is recommended when working with HTML templates. Components can be registered globally against the `Vue` function using the provided `registerComponent` helper. This registers all given components with the library `vf-` prefix.

```js
import { Button, registerComponent } from 'app-marketplace-ui-components';
import Vue from 'vue';

registerComponent(Vue, Button);
```

Registered components can then be referenced anywhere within a Vue template.

```html
<div class="app">
    <form>
        ...
        <vf-button href="#">Button</vf-button>
    </form>
</div>
```
