# Configuration

The provided `configure` function allows global library options to be overridden. This function should be called before components are used.

```js
import { configure } from 'app-marketplace-ui-components';

configure({
  iconSpritesheetPath: '/assets/ws2/svg/group/sprite.svg'
});
```
