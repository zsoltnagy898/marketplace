# Page-level modules

Modules in this directory are for reference in a corresponding marketplace page template. Typically, each should contain a page-specific Vue application, but any code can be executed.

## Example

##### content/pages/custom/checkout.html

```html
{% block content %}
<div id="app">
    <!-- Markup generated with Nunjucks containing Vue template hooks -->
</div>

<!-- Any additional dependencies -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vee-validate/2.1.6/vee-validate.min.js"></script>
{% endblock %}

{% block page_scripts %}
<script src="{{ r('/assets/js/dist/pages/checkout.js') }}"></script>
{% endblock %}
```

##### webpack.config.js

```js
module.exports = {
  entry: {
    main: './themes/vodafone/assets/js/src/main.js',
    'pages/checkout': './themes/vodafone/assets/js/src/pages/checkout.js'
  },
  ...
};
```

##### assets/js/src/pages/checkout.js

Modules are compiled using Webpack and support ES6 import syntax and features.

```js
import localModule from './localModule';

const Vue = window.Vue;

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  ...
});
```
